const { User } = require('../models/User.js')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const nodemailer = require('nodemailer')
const sendMail = require('../utils/Mailer.js')
const { google } = require('googleapis')
require('dotenv').config({
    path: './.env'
})

const oAuthClient = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
)

oAuthClient.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)

        const accessToken = jwt.sign({ id: user._id, email: user.email, username: user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" })

        const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" })

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }
    } catch (error) {
        throw new Error("Error in generating access and refresh token : ", error)
        console.log("Something went wrong while generating access and refresh token")
    }
}


const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.json({ message: "Please fill all the fields", status: 400 })
        }
        const usernameCheck = await User.findOne({ $or: [{ email }, { username }] })
        if (usernameCheck) {
            return res.json({ message: "User already exists", status: 400 })
        }
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const user = await User.create({ email, password: hashedPassword, username: username.trim().toLowerCase() })
        await sendMail({ email, emailType: 'VERIFY', userId: user._id })
        const createdUser = await User.findById(user._id).select("-password")


        res.json({ message: "User created successfully", status: 200, user: createdUser })

    } catch (error) {
        console.log("Error in registering user : ", error)
    }
}

const getUserData = async (req, res) => {
    try {
        // If the user is logged in, req.user should be set by the verifyJWT middleware
        const { accessToken } = req.body;
        console.log("accessToken", accessToken)
        // if (!accessToken) {
        //     console.log("Unauthorized request")
        //     return res.status(401).json({ message: "Unauthorized request" })
        // }

        const decodedInfo = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        console.log("decpdedInfo", decodedInfo)
        const user = await User.findById(decodedInfo?.id).select("-password -refreshToken")
        if (!user) {
            return res.status(401).json({ message: "Invalid accessToken" })
        }
        console.log("user", user)
        req.user = user;

        return res.status(200).json({ message: "User details fetched successfully", user });
    } catch (error) {
        console.error("Error fetching user data:", error.message);
        return res.status(500).json({ message: "Error fetching user data" });
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: "Please fill all the fields", status: 400 })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({ message: "User does not exist, Please signup first", status: 400 })
        }
        const passMatch = await bcryptjs.compare(password, user.password)
        if (!passMatch) {
            return res.json({ message: "Invalid credentials", status: 400 })
        }
        const { refreshToken, accessToken } = await generateAccessAndRefreshToken(user._id)
        console.log(refreshToken, accessToken)
        const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

        const cookieOptions = {
            httpOnly: true,
            secure: true
        }

        res.cookie('refreshToken', refreshToken, cookieOptions)
            .cookie('accessToken', accessToken, cookieOptions)
            .json({ message: "User logged in successfully", status: 200, user: loggedInUser, accessToken, refreshToken })


    } catch (error) {
        console.log("Error Logging in user : ", error)
    }
}

const logoutUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.user._id, {
            $set: {
                refreshToken: undefined
            }
        }, { new: true })
        const cookieOptions = {
            httpOnly: true,
            secure: true
        }
        res
            .status(200)
            .clearCookie('refreshToken', cookieOptions)
            .clearCookie('accessToken', cookieOptions)
            .json({ message: "User logged out successfully", status: 200 })

    } catch (error) {
        console.log("Error Logging out user : ", error.message)
    }
}


const verifyMail = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) {
            return res.json({ message: "Token not found", status: 400 })
        }
        const user = await User.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } })
        if (!user) {
            return res.json({ message: "Invalid or expired token", status: 400 })
        }
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save({ validateBeforeSave: false })
        res.json({ message: "Email verified successfully", status: 200 })

    } catch (error) {
        console.log("Error Verifying mail : ", error)
        res.json({ message: "Error Verifying mail", status: 500 })
    }
}

const createCheckoutSession = async (req, res) => {
    try {
        const stripe = require('stripe')(process.env.STRIPE_KEY)
        const { products } = req.body;
        const lineItems = products.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                    images: [item.images[0]],
                },
                unit_amount: Math.round(Number(item.price.slice(2, item.price.length)))
            },
            quantity: item.quantity
        }))
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel'
        })
        res.json({ id: session.id })

    } catch (error) {
        console.log("Error creating checkout session : ", error)
    }
}

const handleNews = async (req, res) => {
    try {

        const { email } = req.body;
        console.log(email)
        if (!email) {
            return res.json({ message: "Please fill all the fields", status: 400 })
        }

        const accessToken = await oAuthClient.getAccessToken()
        let token = await accessToken.token;
        console.log("token is : ", token)
        var transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'aryan.yadav.9889@gmail.com',
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: token
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        const mailOptions = {
            from: 'aryan.yadav.9889@gmail.com',
            to: email,
            subject: 'Subscribe to our newsletter',
            html: `<p>Thank you for subscribing to our newsletter. You will receive all the latest updates and offers on your email.</p>`
        }
        const mailResponse = await transport.sendMail(mailOptions)
        console.log(mailResponse)
        return mailResponse;
        res.json({ message: "Mail sent successfully", status: 200, mailResponse })
    } catch (error) {
        console.log("Error creating checkout session : ", error)
    }
}

module.exports = { registerUser, loginUser, logoutUser, verifyMail, createCheckoutSession, getUserData, handleNews }
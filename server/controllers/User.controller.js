const { User } = require('../models/User.js')
const jwt  = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
require('dotenv').config({
    path: './.env'
  })
  
  
  

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        console.log(user)
        const accessToken = jwt.sign({ id: user._id, email: user.email, username: user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" })
        console.log(accessToken)
        const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" })
        console.log(refreshToken)
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
        const createdUser = await User.findById(user._id).select("-password")
        res.json({ message: "User created successfully", status: 200, user: createdUser })


    } catch (error) {
        console.log("Error in registering user : ", error)
    }
}

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
        const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

        const cookieOptions = {
            httpOnly: true,
            secure: true
        }

        res
        .status(200)
        .cookie('refreshToken',refreshToken,cookieOptions)
        .cookie('accessToken',accessToken,cookieOptions)
        .json({ message: "User logged in successfully", status: 200, user: loggedInUser })


    } catch (error) {
        console.log("Error Logging in user : ", error)
    }
}


const verifyMail = async (req, res) => {
    try {

    } catch (error) {
        console.log("Error Verifying mail : ", error)
        res.json({ message: "Error Verifying mail", status: 500 })
    }
}



module.exports = { registerUser, loginUser }
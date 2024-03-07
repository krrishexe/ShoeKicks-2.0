const { User } = require('../models/User.js')
const { jwt } = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

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
        if (!emailCheck) {
            return res.json({ message: "User does not exist", status: 400 })
        }

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
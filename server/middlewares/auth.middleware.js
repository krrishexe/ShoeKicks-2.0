const User = require("../models/User.js");
const jwt = require("jsonwebtoken");

const verifyJWT = async (req, res, next) => {
    try {
        const {accessToken} = req.body;
        console.log("accessToken", accessToken)
        // const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        // console.log('token', token)
        if (!accessToken) {
            console.log("Unauthorized request")
            return res.status(401).json({ message: "Unauthorized request" })
        }

        const decodedInfo = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedInfo?._id).select("-password -refreshToken")
        if (!user) {
            return res.status(401).json({ message: "Invalid accessToken" })
        }

        req.user = user;
        next()
    } catch (error) {
        return res.status(401).json({ message: error?.message || "Invalid accessToken" })
    }
}

module.exports = verifyJWT;
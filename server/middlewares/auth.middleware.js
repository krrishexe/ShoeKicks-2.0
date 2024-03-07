const User = require("../models/User.js");
const jwt = require("jsonwebtoken");

const verifyJWT = async (req, res, next) => {

    // this code is just written to check if the user is logged in or not.

    try {
        //req me cookies kaise access kar rahe ho ?
        // kyuki cookies two way access ho sakti hai , res me bhi or req me bhi.
        // humne 
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

        if (!token) {
            console.log("Unauthorized request")
            throw new Error("Unauthorised Request")
        }

        const decodedInfo = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedInfo?._id).select("-password -refreshToken")
        if (!user) {
            throw new ApiError(401, "Invalid accessToken")
        }

        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid accessToken")
    }

}

module.exports = verifyJWT;
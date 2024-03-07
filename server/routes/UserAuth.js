const express = require('express');
const { registerUser, loginUser, logoutUser, verifyMail } = require('../controllers/User.controller');
const verifyJWT = require('../middlewares/auth.middleware.js');
const authRouter = express.Router();

authRouter.route('/signup').post(registerUser)
authRouter.route('/login').post(loginUser)
authRouter.route('/logout').post(verifyJWT, logoutUser)
// authRouter.post('/refreshToken',)
authRouter.post('/verifyemail',verifyMail)

module.exports = authRouter;
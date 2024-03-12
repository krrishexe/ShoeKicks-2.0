const express = require('express');
const { registerUser, loginUser, logoutUser, verifyMail,createCheckoutSession,getUserData } = require('../controllers/User.controller');
const verifyJWT = require('../middlewares/auth.middleware.js');
const authRouter = express.Router();

authRouter.route('/signup').post(registerUser)
authRouter.route('/login').post(loginUser)
authRouter.route('/logout').post(verifyJWT, logoutUser)
// authRouter.post('/refreshToken',)
authRouter.route('/verifyemail').post(verifyMail)
authRouter.route('/create-checkout-session').post(createCheckoutSession)
authRouter.route('/me').post(getUserData)

module.exports = authRouter;
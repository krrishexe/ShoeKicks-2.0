const express = require('express');
const { registerUser, loginUser,logoutUser} = require('../controllers/User.controller');
const verifyJWT = require('../middlewares/auth.middleware.js');
const authRouter = express.Router();

authRouter.route('/register').post(registerUser)
authRouter.route('/login').post(loginUser)
authRouter.route('/logout').post(verifyJWT , logoutUser)
// authRouter.post('/refreshToken',)
// authRouter.post('/verifyemail',)

module.exports = authRouter;
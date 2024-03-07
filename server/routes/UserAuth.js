const express = require('express');
const { registerUser, loginUser } = require('../controllers/User.controller');

const authRouter = express.Router();

authRouter.post('/signup', registerUser)
authRouter.post('/login', loginUser)
// authRouter.post('/logout',)
// authRouter.post('/refreshToken',)
// authRouter.post('/verifyemail',)

module.exports = authRouter;
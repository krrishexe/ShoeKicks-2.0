const express = require('express');
const { registerUser } = require('../controllers/User.controller');

const authRouter = express.Router();

authRouter.post('/signup', registerUser)
// authRouter.post('/login',)
// authRouter.post('/logout',)
// authRouter.post('/refreshToken',)
// authRouter.post('/verifyemail',)

module.exports = authRouter;
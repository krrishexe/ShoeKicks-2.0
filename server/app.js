// import { Express } from "express";
const express = require('express');
const mongoose = require('mongoose')
const app = express();
var cors = require('cors')
const connectDB = require('./db/conn.js')

require('dotenv').config({
  path: './.env'
})



//MIDDLEWARES
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())

//Routes
const postsRoute = require('./routes/posts.js')
app.use('/api/v1/posts', postsRoute);

const authRouter = require('./routes/UserAuth.js')
app.use('/api/v1/user', authRouter)




connectDB().then(() => {
  app.listen(5000, () => {
    console.log("server started Successfuly at localhost http://localhost:5000/api/v1/posts/")
  })
})
  .catch((err) => {
    console.log("Error in starting server : ", err)
  })
// import { Express } from "express";
const express = require('express');
const mongoose = require('mongoose')
const app = express();
var cors = require('cors')
const connectDB = require('./db/conn.js')

app.use(cors())

require('dotenv/config')


  
//MIDDLEWARES
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const postsRoute = require('./routes/posts')
app.use('/posts',postsRoute);


//ROUTES
app.get('/',function(req,res){
    res.send("helloo")
    // res.set({
    // "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    // });
})




app.listen(5000,()=>{
  connectDB()
  console.log("server started Successfuly at localhost http://localhost:5000/posts/")
})
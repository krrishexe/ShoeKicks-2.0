// import { Express } from "express";
const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv/config')

const postsRoute = require('./routes/posts')

//MIDDLEWARES
app.use('/posts',postsRoute);



//ROUTES
app.get('/',function(req,res){
    res.send("hello")
})

app.get('/shop',function(req,res){
    res.send("shop")
})


// Connect to DB
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_CONNECTION)
    .catch(error => handleError(error));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(3000,function(){
    console.log("server started Successfuly at localhost 3000")
})
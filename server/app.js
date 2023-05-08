// import { Express } from "express";
const express = require('express');
const mongoose = require('mongoose')
const app = express();
var cors = require('cors')

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


// Connect to DB
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_CONNECTION)
  .then(()=> console.log("Mongoose Connected Successfuly"))
    .catch(error => console.log(error));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(5000,function(){
    console.log("server started Successfuly at localhost http://localhost:5000/posts/")
})
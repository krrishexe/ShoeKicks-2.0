// import { Express } from "express";
const express = require('express');

const app = express();

app.get('/',function(req,res){
    res.send("hello")
})
app.get('/blog',function(req,res){
    res.send("blog")
})
app.get('/shop',function(req,res){
    res.send("shop")
})

app.listen(3000,function(){
    console.log("server started Successfuly at localhost 3000")
})
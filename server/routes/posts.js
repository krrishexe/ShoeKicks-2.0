const express = require('express')
const router = express.Router();
const Post= require("../models/Post");



router.post('/',function(req,res){
    res.send("posts")
})



// TO GO DEEPER INTO ROUTES WE CAN ADD MORE ROUTES AND IT WILL READ THEM AS  --> "/POSTS/SPECIFIC"

router.post('/specific',function(req,res){
    res.send("Specific posts")
})

module.exports = router;
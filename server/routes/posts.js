const express = require('express')

const router = express.Router();

router.get('/',function(req,res){
    res.send("posts")
})



// TO GO DEEPER INTO ROUTES WE CAN ADD MORE ROUTES AND IT WILL READ THEM AS  --> "/POSTS/SPECIFIC"

router.get('/specific',function(req,res){
    res.send("Specific posts")
})

module.exports = router;
const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

//GETS BACK A SPECIFIC POST

router.get('/:postId',async (req,res)=>{
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (error) {
        console.log(error)
    }

} )

// GETS BACK ALL THE POST   
router.get('/', async function(req,res){
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (error) {
        res.json(error)
    }
})

// ADDS A NEW POST 
router.post('/',async function(req,res){
    // console.log(req.body
    const post_data = new Post({
        vendor:req.body.vendor,
        name:req.body.name,
        price:req.body.price,
        images:req.body.images,
    });

    try {
        const savedPost = await post_data.save()
        res.json(savedPost)
    } catch (error) {
        console.log(error)
    }
});

//DELETES A SPECIFIC POST
router.delete('/:postId',async (req,res)=>{
    try {
        const removedPost = await Post.findByIdAndRemove(req.body.postId);
        res.json(removedPost)
    } catch (error) {
        console.log(error)
    }
})










// TO GO DEEPER INTO ROUTES WE CAN ADD MORE ROUTES AND IT WILL READ THEM AS  --> "/POSTS/SPECIFIC"

router.post('/specific',function(req,res){
    res.send("Specific posts")
})

module.exports = router;
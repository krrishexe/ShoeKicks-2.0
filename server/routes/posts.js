const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
const ObjectId = require('mongodb').ObjectID;
const Redis = require('ioredis');
const redis = new Redis();

// THIS WAS INSERTED SO THAT IT DOES NOT THROW ANY ERROR RELATED TO CORS
var cors = require('cors')
var corsOptions = {
    origin: '*',
}

//GETS BACK A SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try {
        const postId = parseInt(req.params.postId);
        let singleProduct = await Post.findOne({ "products": { $elemMatch: { "id": postId } } }, { "products.$": 1 });
        res.json(singleProduct)
    } catch (error) {
        console.log(error)
    }

})

// GETS BACK ALL THE POST   
// GETS BACK ALL THE POST   
router.get('/', cors(corsOptions), async function (req, res) {
    const redisKey = 'posts';

    // Try fetching the result from Redis first in case we have it cached
    let cachedData = await redis.get(redisKey);
    // console.log(cachedData)

    if (cachedData) {
        return res.json(JSON.parse(cachedData));
    } else {
        const posts = await Post.find();

        // Save the API response in Redis store, data expire time in 3600 seconds, i.e. one hour
        await redis.set(redisKey, JSON.stringify(posts), 'EX', 3600);

        return res.json(posts);
    }
})

// ADDS A NEW POST 
router.post('/', async function (req, res) {
    // console.log(req.body)
    const post_data = new Post({
        id: req.body.id,
        vendor: req.body.vendor,
        name: req.body.name,
        shoe_type: req.body.shoe_type,
        description: req.body.description,
        size_type: req.body.size_type,
        sizes: req.body.sizes,
        price: req.body.price,
        images: req.body.images,
    });

    try {
        const savedPost = await post_data.save()
        res.json(savedPost)
    } catch (error) {
        console.log(error)
    }
});

//DELETES A SPECIFIC POST

router.delete('/:postId', async (req, res) => {
    try {
        console.log(req.params.postId)
        const removedPost = await Post.findByIdAndDelete({ _id: req.params.postId },);      // in new mongoose update it only works with findOneAndDelete() function
        res.json(removedPost)
    } catch (error) {
        console.log(error)
    }
})


// UPDATES A SPECIFIC POST

router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.findOneAndUpdate({ _id: ObjectId(req.params.postId) }, {
            $set:
            {
                "vendor": "shoekicks",
                "name": "null",
                "price": "00",
                "images": [
                    "https://cdn.shopify.com/s/files/1/0659/0722/8923/products/DUNK1.jpg?v=1679742723&width=533",
                    "https://cdn.shopify.com/s/files/1/0659/0722/8923/products/DUNK1.jpg-2.jpg?v=1679742723&width=533"
                ]


            }
        })
        res.json(updatedPost)
    } catch (error) {
        res.json(error)
    }
})








// TO GO DEEPER INTO ROUTES WE CAN ADD MORE ROUTES AND IT WILL READ THEM AS  --> "/POSTS/SPECIFIC"

router.post('/specific', function (req, res) {
    res.send("Specific posts")
})

module.exports = router;


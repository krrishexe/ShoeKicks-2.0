const mongoose = require('mongoose')
const {Schema} = mongoose;

const postSchema = new Schema({
    vendor :String,
    name:String,
    price:String,
    images:Array,
})

module.exports = mongoose.model('Posts',postSchema);


                // mongoose.model('router_name', 'schema_name')
// module.exports = mongoose.model('Posts',postSchema);
        
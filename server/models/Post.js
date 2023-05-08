const mongoose = require('mongoose')
const {Schema} = mongoose;

const postSchema = new Schema({
    id:Number,
    vendor :String,
    name:String,
    shoe_type:String,
    description:String,
    size_type:String,
    sizes:Array,
    price:String,
    images:Array,
})

module.exports = mongoose.model('Posts',postSchema);


                // mongoose.model('router_name', 'schema_name')
// module.exports = mongoose.model('Posts',postSchema);
        



// DATABASE >>> COLLECTION >>> DOCUMENTS 
//COLLECTION ==> TABLES
//DOCUMENTS ==> DATA 
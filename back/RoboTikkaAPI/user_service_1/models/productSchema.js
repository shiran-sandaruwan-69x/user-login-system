const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true /*meka aniwarayen oneda*/
    },
    description:{
        type:String,
        required:true /*meka aniwarayen oneda*/
    },
    price:{
        type:Number,
        required:true /*meka aniwarayen oneda*/
    },
    discount:{
        type:Number,
        required:true
    },
    image:{
        type:String,
    }
});

module.exports = mongoose.model('product',ProductSchema);
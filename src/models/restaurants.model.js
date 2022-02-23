const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    id:{type:Number, required: true,unique:true},
    title:{type:String, required: true },
    price:{type:Number, required: true},
    image:{type:String, required: true}
},
{
    versionKey:false,
    timestamps:true
})

const Restaurant = mongoose.model("restaurant",restaurantSchema)

module.exports = Restaurant
const mongoose = require('mongoose');

const vegetableSchema = new mongoose.Schema({
    id:{type:Number, required: true,unique:true},
    title:{type:String, required: true },
    price:{type:Number, required: true},
    image:{type:String, required: true}
},
{
    versionKey:false,
    timestamps:true
})

const Vegetable = mongoose.model("vegetable",vegetableSchema)

module.exports = Vegetable
const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
    id:{type:Number, required: true,unique:true},
    title:{type:String, required: true },
    price:{type:Number, required: true},
    image:{type:String, required: true}
},
{
    versionKey:false,
    timestamps:true
})

const Grocery = mongoose.model("groceries",grocerySchema)

module.exports = Grocery
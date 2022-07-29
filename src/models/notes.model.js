const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title:{type:String, required: true },
    body:{type:String, required: true}
},
{
    versionKey:false,
    timestamps:true
})

const Notes = mongoose.model("note",notesSchema)

module.exports = Notes
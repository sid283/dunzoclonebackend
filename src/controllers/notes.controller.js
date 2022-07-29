const express = require('express')
const Notes = require('../models/notes.model')
const router = express.Router()

router.post("",async(req,res)=>{
    try{
        const note = await Notes.create(req.body)
        res.status(201).send(note)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const page = req.query.page || 1
        const notes = await Notes.find().skip((page-1)*10).limit(6).lean().exec()
        res.status(200).send(notes)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const note = await Notes.findOneAndUpdate({id:req.params.id},req.body,{new:true}).lean().exec()
        res.status(200).send(note)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const note = await Notes.findOneAndDelete({id:req.params.id})
        res.status(200).send(note)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router
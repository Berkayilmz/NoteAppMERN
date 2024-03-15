const noteModel = require('../models/noteModel');
const mongoose = require('mongoose');


//Get notes
const getNotes = async (req, res) => {
    const notes = await noteModel.find().sort({ createdAt: -1 });
    res.status(200).json(notes)
}

//Get note by id
const getNoteByID = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ err: 'invalid id' });
    } else {
        const note = await noteModel.findById(id);
        if (!note) {
            return res.status(404).json({ err: 'Note is not found' });
        } else {
            res.status(200).json(note);
        }
    }
}

//Create a note
const createNote = async (req, res) => {
    const { title, comment } = req.body;
    try {
        const note = await noteModel.create({ title, comment });
        res.status(200).json(note);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const deleteNote = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'id is invalid' });
    }
    else {
        const note = await noteModel.findOneAndDelete({ _id: id });
        if (!note) {
            return res.status(404).json({ error: 'Note is not found' });
        }
        else return res.status(200).json(note);
    }
}

const updateNote = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'id is invalid'})
    }else{
        const note=await noteModel.findOneAndUpdate({_id:id},{...req.body},{new:true})
        if(!note){
            return res.status(404).json({error:'Note is not found'});
        }
        res.status(200).json(note);
    }
}


module.exports = {
    createNote,
    getNotes,
    getNoteByID,
    deleteNote,
    updateNote
}
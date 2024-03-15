const express=require('express');
const router=express.Router();
const { createNote, getNotes, getNoteByID, deleteNote, updateNote } = require('../controllers/noteController.js');

router.get('/',getNotes);

router.get('/:id',getNoteByID);

//ADD
router.post('/',createNote);

//DELETE
router.delete('/:id',deleteNote)

//UPDATE
router.patch('/:id',updateNote)



module.exports=router;
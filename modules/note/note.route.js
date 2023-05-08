import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { addNote, deleteNote, getAllNotes, getNoteById, getNotes, SearchNote, updateNote } from "./controller/note.controller.js";
import { addNoteSchema, deleteNoteSchema, getNoteByIdSchema, getNotesSchema, SearchNoteSchema, updateNoteSchema } from "./note.validation.js";
import { validation } from "../../middleware/validation.js";


const router=Router();


// ## 1- CREATE note  (user must be logged in and confirmed)(Aplly Joi validation)
router.post('/addNote',auth(),validation(addNoteSchema),addNote)


// ## 2- UPDATE note  (user must be logged in and confirmed)(Aplly Joi validation)
router.put('/updateNote/:id',auth(),validation(updateNoteSchema),updateNote)



// ## 3- DELETE note  (user must be logged in and confirmed)(Aplly Joi validation)
router.delete('/deleteNote/:id',auth(),validation(deleteNoteSchema),deleteNote)

// ## 4- get all notes(user must be logged in)(user must be logged in and confirmed)
router.get('/getAllNotes',auth(),getAllNotes)

// ## 5- get specific note by id (user must be logged in and confirmed)(Aplly Joi validation)
router.get('/getNoteById/:id',auth(),validation(getNoteByIdSchema),getNoteById)


// ## 6- search about note by (title or content) (user must be logged in and confirmed)(Aplly Joi validation)
router.get('/SearchNote',auth(),validation(SearchNoteSchema),SearchNote)


// ## 7- get notes that created by specific user (Aplly Joi validation)
router.get('/getNotes',auth(),validation(getNotesSchema),getNotes)


export default router;
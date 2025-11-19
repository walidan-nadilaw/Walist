import express from "express";
import {getAllNotes, getOneNote, createNote, updateNote, deleteNote} from "../controllers/noteControllers.js";

const router = express.Router(); //create a new express router to define note routes

router.get("/", getAllNotes);
router.get("/:id", getOneNote)
router.post("/", createNote);
router.put("/:id", updateNote)
router.delete("/:id", deleteNote)
    
export default router
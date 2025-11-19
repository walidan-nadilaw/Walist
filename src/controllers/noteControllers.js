import Note from "../models/Note.js"

export async function getAllNotes(req,res) {
    try{
        const AllNote= await Note.find(); //fetch all notes from database
        res.status(200).json(AllNote);//send back all notes as JSON response with status 200
    }catch(error){
        console.error("Error get All Notes in noteController: getAllNotes", error);
        res.status(500).json({message: "Internal Server Error"}) //send back error message with status 500
    }
}

export async function getOneNote(req,res) { //req.params.id gets the id from the request URL
    res.status(200).send(`you got note number ${req.params.id}`);
}

export async function createNote(req,res) {
    try {
        const {title, content} = req.body; //destructure title and content from request body (see notes on javaScript json destructuring)
        const newNote = new Note ({title, content});
        await newNote.save(); //save the new note to the database
        res.status(201).json(
            {
                message: "note successfully created",
                note: newNote
            });
    } catch(error){
        console.error("Error creating a note in noteController: createNote", error);
        res.status(500).json({message: "Internal Server Error"})
    }
}

export async function updateNote(req,res) {
    res.status(200).json({message: `note ${req.params.id} successfully updated`});
}

export async function deleteNote(req,res) {
    res.status(200).json({message: `note ${req.params.id} successfully deleted`});
}


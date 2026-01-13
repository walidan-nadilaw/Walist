import Note, {valid_priorities} from "../models/NoteSchema.js"

export async function getAllNotes(req,res) {
    try {
        const totalNotes = await Note.countDocuments();
        const AllNotes = await Note.find();
        res.status(200).json(
            {
                total: totalNotes,
                Notes: AllNotes
            }
        );
    }
    catch (error) {
        console.error("Error in getAllnotes controller", error);
        res.status(500).json({message: "internal server error"});
    }
}

export async function getOneNote(req,res) { //req.params.id gets the id from the request URL
    try{
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message: "note not found"});
        res.status(200).json(note);
    }
    catch (error) {
        console.error("Error in getOneNote controller", error);
        res.status(500).json({message: "internal server error"});
    }
}

export async function createNote(req,res) {
    try{
        const {title, content, priority} = req.body
        const newNote = new Note({title, content, priority});
        const savedNote = await newNote.save();
        res.status(200).json(
            {
                message: "Note created successfully",
                note : savedNote
            }
        );
    }
    catch(error){
        console.error("Error in createNote controller", error);
        res.status(500).json({message: "internal server error"});
    }
}

export async function updateNote(req,res) {
    try{
        const {title, content, priority} = req.body;

        if(priority && !valid_priorities.includes(priority)){
            return res.status(404).json({message: `invalid priority. Allowd values are ${valid_priorities.join(", ")}` });
        }

        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            {
                title,
                content,
                priority
            },
            {new: true}
        );

        if(!updatedNote) return res.status(404).json({messsage: "note not found"});
        res.status(200).json(
            {
                message: "note updated successfully",
                note: updatedNote
            }
        );
    }
    catch(error){
        console.error("Error in updateNote controller", error);
        res.status(500).json({message: "internal server error"});
    }
}

export async function deleteNote(req,res) {
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({message: "Note not found"});
        res.status(200).json(
            {
                message: "Note deleted successfully",
                note : deletedNote
            }
        );
    }
    catch(error){
        console.error("error in deleteNote controller", error);
        res.status(500).json({message: "internal server error"});
    }
}


import mongoose from "mongoose";

const noteSchema = new mongoose.Schema( //define schema for Note model
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        priority: {
            type: String,
            enum: ["💀", "👍", "⭐"],
            default: "💀"
        }
    }, {timestamps: true}
); 

const Note = mongoose.model("Note", noteSchema); //create model using noteSchema as the blueprint with the name "Note"
//monggoose.model add methods like . find(), .findById(), .save() to interact with the notes collection in the database
export default Note
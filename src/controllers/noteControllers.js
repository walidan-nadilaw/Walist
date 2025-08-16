export async function getAllNotes(req,res) {
    res.status(200).send("You just fetched 20 notes");
}

export async function getOneNote(req,res) {
    res.status(200).send(`you got note number ${req.params.id}`);
}

export async function createNote(req,res) {
    res.status(201).json({message: "note successfully created"});
}

export async function updateNote(req,res) {
    res.status(200).json({message: `note ${req.params.id} successfully updated`});
}

export async function deleteNote(req,res) {
    res.status(200).json({message: `note ${req.params.id} successfully deleted`});
}


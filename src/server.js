import express from "express"; //import express framework for web server
import noteRoutes from "../src/routers/noteRoutes.js"; //import note routes for handling /api/notes requests
import {connectDB} from "../src/config/db.js"; //import custom function to connect to database
import dotenv from "dotenv"; //import dotenv to manage env

dotenv.config(); //load environment variables from .env file
connectDB(); //custom function to establish a connection to the database 

const app = express(); //make a new express app for web server and store it as app
const PORT = process.env.PORT || 5001; //get port from env or default to 5001

app.use(express.json()); //middleware to parse incoming JSON requests
app.use("/api/notes", noteRoutes); //for any request to /api/notes, access route that matches in noteRoutes

app.listen(PORT, () => { //start server and listen for request on specified PORT
    console.log("server is running on PORT:", PORT);
});


/*
i dont understand

dotenv.config
await mongoose.connect?
process.exit?
process.env.MONGO_URI?
*/
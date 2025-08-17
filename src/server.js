import express from "express";
import noteRoutes from "../src/routers/noteRoutes.js";
import {connectDB} from "../src/config/db.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
    console.log("server is running on PORT:", PORT);
});


/*
i dont understand

dotenv.config
await mongoose.connect?
process.exit?
process.env.MONGO_URI?
*/
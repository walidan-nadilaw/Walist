import express from "express";
import noteRoutes from "../src/routers/noteRoutes.js";

const app = express();

app.use("/api/notes", noteRoutes);

app.listen(5001, () => {
    console.log("server is running on PORT:5001");
});

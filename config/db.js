import mongoose from "mongoose";

const connectDB = async() => {
    try{
        await.mongoose.connect(//enter somethgin);
        console.log("MONGODB succesfully connected");
    }catch(error){
        console.error("Error connecting to MONGODB", error)
        process.exit(1);
    }
}
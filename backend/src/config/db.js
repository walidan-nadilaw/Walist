import mongoose from "mongoose"; //import mongoose library for MongoDB interaction

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI); //connect to MONGODB using connection string from env
        console.log("MONGODB succesfully connected");
    }catch(error){
        console.error("Error connecting to MONGODB", error)
        process.exit(1);
    }
}

export default connectDB;
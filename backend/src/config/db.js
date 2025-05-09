import mongoose from "mongoose";

export const connectDb = async () =>{
    try {
        const conn = mongoose.connect(process.env.MONGO_URI || "mongodb+srv://ndayiringiyedavid120:7M34jKOyDfl36m3J@cluster0.hrzpuac.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log({message : "database connected successfully", conn: mongoose.connection.host})
    } catch (error) {
        console.log({message : "database connection failure"})
    }
}
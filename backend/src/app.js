import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
dotenv.config()
const app = express();
app.use(express.json());
app.use(cors());
const PORT=process.env.PORT || 4000;
 app.get("/", (req, res)=>{
    res.send("how are you to day")
 });
app.listen(PORT, async() =>{
    await connectDb();
    console.log(`server is run on port ${PORT}`);
});
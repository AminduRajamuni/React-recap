import express from "express";
import mongoose from "mongoose"
import messageRouter from "./routes/messageRoutes";


const app = express()
const PORT = 5000

app.listen(PORT,()=>{

console.log(`Server is running on port ${PORT}`);
})


app.use("/message", messageRouter)
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import messageRouter from "./routes/messageRoutes.js";

const app = express();
const PORT = 5000;

dotenv.config();


app.use(express.json());
app.use(cors());


app.use("/message", messageRouter);

mongoose.connect(process.env.MongoCode)
  .then(() => {
    console.log("Connected to MongoDB");
    
 
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connection Error:", err);
  });
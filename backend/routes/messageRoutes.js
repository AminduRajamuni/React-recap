import { saveMessage, getMessages } from "../controllers/messageFunctions.js";
import express from "express"

const messageRouter = express.Router();
messageRouter.post("/", saveMessage);
messageRouter.get("/", getMessages);

export default messageRouter;
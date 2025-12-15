import { saveMessage } from "../controllers/messageFunctions.js";
import express from "express"

const messageRouter = express.Router();
messageRouter.post("/", saveMessage);

export default messageRouter;
import { saveMessage } from "../controllers/messageFunctions";
import express from "express"

const messageRouter = express.Router();
messageRouter.post("/", saveMessage);

export default messageRouter;
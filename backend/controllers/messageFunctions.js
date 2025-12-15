import Message from "../collections/message.js";
import express from "express"

export async function saveMessage(req,res){

    const data = req.body
    const newMessage = new Message(data);
    newMessage.save().then(()=>{
        res.status(200).json("Message saved successfully")
        console.log("Message saved successfully");
    }).catch((err)=>{
        res.status(500).json("Error saving message: " + err)
    })
}
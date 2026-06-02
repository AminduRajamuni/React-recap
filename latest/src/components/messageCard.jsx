import React from "react";

function MessageCard({message}){

    return(
        <div className="w-[300px] h-[200px] bg-white text-black shrink-0" >
            <h1 >{message.name}</h1>
            <p>{message.message}</p>        
            </div>
    )}

    export default MessageCard;
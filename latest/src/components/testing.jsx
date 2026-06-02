import { useState } from "react";

export default function Testing(){

    const[count,setCount]= useState(0);
    const[fruit, setFruit] =useState("Coconut");

    return(

        <div className="w-full h-screen bg-amber-100 flex flex-col justify-center items-center">
        <h1 className="text-8xl">{count} {fruit}s</h1>
        <button className="bg-black m-1 w-[150px] h-[50px] text-white rounded-2xl m-5 text-lg" onClick={()=>{

           const newCount = count+1;
           setCount(newCount);
            console.log("Clicked!");

        }}>Click</button>
        <div className=" w-full h-[100px] flex justify-center items-center">

            <button className="bg-amber-400 m-1 w-[150px] h-[50px] text-white rounded-2xl m-5 text-lg" 
            onClick={()=>{

                setFruit("Apple");
            }}>Apple</button>

            <button className="bg-amber-400 m-1 w-[150px] h-[50px] text-white rounded-2xl m-5 text-lg" 
            onClick={()=>{

                setFruit("Orange")
            }}>Orange</button>

            <button className="bg-amber-400 m-1 w-[150px] h-[50px] text-white rounded-2xl m-5 text-lg" 
            onClick={()=>{
                setFruit("Banana")
            }}>Banana</button>
        </div>
        </div>
    )
}
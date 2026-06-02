import react from 'react';
import {useState , useEffect}from 'react';


export default function Counter() {

const [count, setCount]=useState(0);
const counteText = count === 10? "Counter is 10" : "";
const increment = ()=>{
    setCount(count+1);
}

const decrement = ()=>{
    setCount(count-1);
}

useEffect(()=>{
//the code we need to run
console.log("the count is :", count)

//optional return function
return()=>{

    console.log("I am being cleaned up.")
}

},[count]);//the dependency array

return(
    <>
    <div className="h-screen w-screen bg-black flex items-center justify-center flex-col">
        <h1 className="text-white text-2xl font-bold mb-9">{counteText}</h1>
        <h1 className="text-white text-8xl font-bold mb-9">{count}</h1>
        <button className="bg-black border-2 px-4 py-2 rounded-2xl border-white text-white" onClick={increment}>click</button>
        <button className="bg-black border-2 px-4 py-2 rounded-2xl border-white text-white mt-4" onClick={decrement}>decrement</button>
    </div>
    </>
)

}
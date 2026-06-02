import react from 'react';
import {useState }from 'react';


export default function Counter() {
const [count, setCount]=useState(0);

const increment = ()=>{
    setCount(count+1);
}

return(
    <>
    <div className="h-screen w-screen bg-black flex items-center justify-center flex-col">
        <h1 className="text-white text-8xl font-bold mb-9">{count}</h1>
        <button className="bg-black border-2 px-4 py-2 rounded-2xl border-white text-white" onClick={increment}>click</button>
    </div>
    </>
)

}
import axios from "axios";
import {useState, useEffect} from "react";
import tost, {toast, Toaster} from "react-hot-toast";
import MessageCard from "../../components/messageCard.jsx";


export default function Home(){


    const [name, setName]=useState("");
    const [message, setMessage]=useState("");
    const [fetchedMessages, setFetchedMessages]=useState([]);


    const[isLoaded, setIsLoaded]=useState(true);

    // 2. Fetch messages from database when component loads
  useEffect(() => {
    fetchMessages();
  }, []);

    const fetchMessages=()=>{

        axios.get("http://localhost:5000/message").then((res)=>{
            setFetchedMessages(res.data);
            setIsLoaded(true);
        }).catch((err)=>{
            console.log("Error fetching messages: " + err);
        })
    }

    function SubmitKaloth(e){
        e.preventDefault();

        const loadingToast = tost.loading("Sending..");
        const dataToSend = {name, message};
        axios.post("http://localhost:5000/message", dataToSend).then((res)=>{
            console.log(res.data);
            toast.dismiss(loadingToast);
            toast.success("Message sent successfully!");
            setName("");
            setMessage("");
        }).catch((err)=>{
            console.log("Error sending message: " + err);
        })


    }




    return(

    <div className=" w-full h-full" >

        <div className="w-[calc(full-50px)] h-[750px] bg-amber-50 m-5">
            <h1 className="font-bold text-[120px]">I'm practicing React,Yohooo!</h1>
            <form className="bg-amber-400 w-[500px] m-1 h-[300px] flex flex-col"  onSubmit={SubmitKaloth}>

            <h1 className="text-[20px]">Tell us your story</h1>
            <input type="text" placeholder=" your name" value={name} className="ml-[5px] mt-5 w-[300px] h-[50px] border-4 border-amber-50 rounded-xl" onChange={(e)=>{

                setName(e.target.value)

            }}></input>
            <input type="text" placeholder=" your message" value={message} className="ml-[5px] mt-5 w-[300px] h-[50px] border-4 border-amber-50 rounded-xl" onChange={(e)=>{

                setMessage(e.target.value)

            }}></input>

            <button className="bg-pink-400 text-xl w-[100px] ml-[5px] mt-[20px] h-[40px] rounded-[20px] font-semibold text-white">Send</button>

            </form>

        </div>

        <div className="w-full h-[1000px] bg-black">

            <div className="  h-[300px] content-center flex justify-center ">

                <h1 className="mt-[130px] text-6xl text-white font-bold">Here are the messages we got from you!</h1>
            </div>

            <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar max-w-6xl mx-auto">
                {fetchedMessages.length===0?(
                    <p className="text-gray-400 text-center w-full">No messages yet. Be the first to type one!</p>
                ):(
                    fetchedMessages.map((msg)=>(
                        <MessageCard key={msg.id} message={msg}/>
                    ))
                )}

            </div>


        </div>

        <Toaster/>

    </div>

    )
}
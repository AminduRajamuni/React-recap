import axios from "axios";
import { useState } from "react" 
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function Login(){

    const navigate = useNavigate()
    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    function handleOnSubmit(e){
        e.preventDefault();


        const data = axios.post("http://localhost:4000/api/users/login",{
            email : email,
            password : password


        }).then((res)=>{

            console.log(res);
            toast.success("Login Successful!")
            localStorage.setItem("token",res.data.token)

            const user = res.data.user;
            if(user.type=="Customer"){

                navigate("/")
            }
            if(user.type=="admin"){

                navigate("/admin")
            }
            console.log(res);
            toast.success("Login Successful!")

        }).catch((err)=>{

            toast.error(err.response.data.error)
            console.log(err);
        })

        console.log("Submitted")
    }
    

    return(

        <div className="bg-amber-100 w-full h-screen flex justify-center items-center">

        <form onSubmit={handleOnSubmit}>
        <div className="w-[550px] h-[600px]  relative  justify-center items-center flex flex-col bg-white ">

        <img src="/logo.png" className="h-[150px] w-[150px] absolute top-4"/>
        <input type="email" placeholder="    Email" className=" w-[300px] h-[50px] mt-[100px] mb-2 border-amber-400 border-4 rounded-xl"
        onChange={(e)=>{

            setEmail(e.target.value);
        }}></input>

        <input type="password" placeholder="    password" className="w-[300px] h-[50px]  border-amber-300 border-4 rounded-xl mb-[50px]
        "onChange={(e)=>{

            setPassword(e.target.value);
        }}></input>

        <button className="bg-pink-400 text-3xl w-[130px] h-[50px] rounded-[17px] font-semibold text-white"
        > Login
        </button>
        

        
        </div>
        </form>
        </div>
    )
}
import { useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { useNavigate } from "react-router-dom"

    export default function SignUp(){

        const [firstName, setFirstName] = useState("")
        const [lastName, setLastName] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")

        async function handleOnSubmit(e){

            e.preventDefault();

            try{
            const data = await axios.post('http://localhost:4000/api/users/signup',{
                firstName : firstName,
                lastName : lastName,
                email : email,
                password : password
            }).then((res)=>{

                console.log(res);
                toast.success("Sign Up Successful! Please Login to continue.")
                navigate("/login");
            })
                
            }catch(err){
                console.error("Error occurred while signing up:", err)
            }

        }


        return(

            <div className="bg-amber-300 w-full h-screen flex justify-center items-center" onSubmit={handleOnSubmit}>

                <form  className=" w-[500px] h-[600px] bg-amber-50 items-center flex flex-col rounded-xl p-[20px]">

                    <h1 className="text-4xl mt-[100px]">Sign Up</h1>
                    <input className="mt-[50px] m-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[300px]" placeholder="First Name"  value={firstName} onChange={(e)=>{
                        setFirstName(e.target.value)
                    }}/>
                    <input className="m-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[300px]" placeholder="Last Name"  value={lastName} onChange={(e)=>{
                        setLastName(e.target.value)
                    }}/>
                    <input className="m-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-4 focus:ring-blue-500 w-[300px]" placeholder="Email"  value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                    <input className="m-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[300px]" placeholder="Password" type="password"  value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Sign Up</button>

                </form>
            
            
            </div>
        )
    }
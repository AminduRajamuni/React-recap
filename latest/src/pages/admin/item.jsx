import {CiCirclePlus} from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function Items(){

    const navigate = useNavigate()

    return (

        <div className="relative w-full h-full">
        <CiCirclePlus  onClick={()=>{

            navigate("/admin/items/add")

        }}  className="text-[50px] absolute right-2 bottom-2 hover:text-amber-600 hover:text-[52px] "></CiCirclePlus>
        </div>

    )
}
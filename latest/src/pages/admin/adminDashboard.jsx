import {Routes, Route, Link} from "react-router-dom";
import Items from "./item";
import AddItems from "./addItems";


export default function AdminDashboard() {

    return(
        <div className= "w-full h-screen flex" >
            <div className="w-[350px] h-screen bg-red-200">
                <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center" >Dashboard</button>

                <Link to="/admin/items" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">Items</Link>
                <Link to="/admin/reviews" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">Reviews</Link>
                <Link to="/admin/users" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">Users</Link>

            </div>
            <div className=" w-[calc(100vw-350px)]">

                <Routes path="/*">
                    <Route path="/items" element={<Items></Items>}/>
                    <Route path="/reviews" element={<h1>Reviews</h1>}/>
                    <Route path="/users" element={<h1>Users</h1>}/>
                    <Route path="/items/add" element={<AddItems></AddItems>}></Route>


                </Routes>
            </div>
        </div>
    )

}



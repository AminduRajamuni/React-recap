import AboutUs from "../pages/home/aboutUs.jsx";
import Home from "../pages/home/home.jsx";
import HomePage from "../pages/home/homePage.jsx";
import {Link} from "react-router-dom";

export default function Header(){

    return (
        <header className="w-full h-[100px] flex justify-center items-center shadow-xl bg-blue-100 relative">

            <img src="/logo.png" className="h-[100px] w-[100px] absolute left-4"/>
            <Link to="/" className="font-bold text-[20px] m-4" element={<Home></Home>}>Home</Link>
            <Link to="/aboutus" className="font-bold text-[20px] m-4" element={<AboutUs></AboutUs>}>About Us</Link>
            <Link to="/profile" className="font-bold text-[20px] m-4" element={<h1>Profile</h1>}>Profile</Link>

        </header>
    )
}
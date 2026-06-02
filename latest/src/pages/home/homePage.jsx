import { Routes, Route} from "react-router-dom";
import Header from "../../components/header.jsx";
import AboutUs from "./aboutUs.jsx";
import Profile from "./profile.jsx";
import Home from "./home.jsx";
import ErrorNotFound from "./error.jsx";

export default function HomePage(){


    return(
        <>
            <Header></Header>


            <div className= "h-[calc(100vh-100px)] w-full bg-yellow-50" >
                <Routes path="/*">

                    <Route path="/" element={<Home></Home>}>
                    </Route>

                    <Route path="/aboutus" element={<AboutUs></AboutUs>}>
                    </Route>

                    <Route path="/profile" element={<Profile></Profile>}>
                    </Route>

                    <Route path="/*" element={<ErrorNotFound></ErrorNotFound>}>
                    </Route>

                </Routes>
            </div>

        </>

    )
}
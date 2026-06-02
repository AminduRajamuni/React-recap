
import {BrowserRouter, Routes,Route} from "react-router-dom";
import AdminDashboard from "./pages/admin/adminDashboard.jsx";
import HomePage from "./pages/home/homePage.jsx";
import Testing from "./components/testing.jsx";
import Counter from "./Counter.jsx";
import Login from "./pages/user/login.jsx";
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/user/signUp.jsx";

function App() {

    return(

        <BrowserRouter>
        <Toaster/>
            <Routes path = '/*'>
                <Route path='/counter' element={<Counter></Counter>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/*" element={<HomePage></HomePage>}/>
                <Route path = "/admin/*" element={<AdminDashboard/>}/>
                <Route path="/testing" element={<Testing></Testing>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>


            </Routes>
          
        </BrowserRouter>

    )

}

export default App

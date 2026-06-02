import { Link } from "react-router-dom";

export default function ErrorNotFound(){
    return(
        <>
       <h1> 404 : Not Found!</h1>
       <Link to="/"  className="text-blue-600">Go back to HomePage</Link>
       </>
    )
}
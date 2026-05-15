import { Outlet } from "react-router";
import Navbar from "../LayoutComponents/Navbar";

export default function AutenticationLayout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        
        
        </>
    )
}

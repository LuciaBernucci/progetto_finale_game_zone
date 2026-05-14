import Footer from "./LayoutComponents/Footer";
import Navbar from "./LayoutComponents/Navbar";
import { Outlet } from "react-router";

export default function Layout(){
    return(
        <div className="min-h-screen flex flex-col">
         <Navbar/>
         <main className="flex-1 pt-[88px] pb-[96px]">
          <Outlet/>
         </main>
         <Footer/>
        </div>
    )
}

import Footer from "./LayoutComponents/Footer";
import Navbar from "./LayoutComponents/Navbar";
import { Outlet, useLoaderData } from "react-router";

export default function Layout(){
  const genres = useLoaderData();
  return(
    <div className="min-h-screen flex flex-col">
    <Navbar/>
    <main className="flex-1 pt-[88px] pb-[96px]">
    <div className="w-full px-6 lg:px-5">
    <Outlet context={{ genres }}/>
    </div>
    </main>
    <Footer/>
    </div>
  )
}

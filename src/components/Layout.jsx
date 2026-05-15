import Footer from "./LayoutComponents/Footer";
import Navbar from "./LayoutComponents/Navbar";
import { Outlet, useLoaderData, useLocation } from "react-router";
import Sidebar from "./LayoutComponents/Sidebar";
import Header from "./HomeComponents/Header";

export default function Layout(){
    const genres = useLoaderData();
    const { pathname } = useLocation();
    return(
        <div className="min-h-screen flex flex-col">
         <Navbar/>
         <main className="flex-1 pt-[88px] pb-[96px]">
            {/* la header viene mostrata solo quando si è in homepage */}
            {pathname === "/" && (
              <div className="w-full px-6 lg:px-5">
                <Header/>
              </div>
            )}
            <section className={`w-full px-6 lg:px-5 grid grid-cols-1 lg:grid-cols-7 gap-4 ${pathname === "/" ? "mt-4" : ""}`}>
              <aside className="lg:col-span-2">
                <Sidebar genres={genres}/>
              </aside>
              <div className="lg:col-span-5 min-w-0">
                <Outlet/>
              </div>
            </section>
         </main>
         <Footer/>
        </div>
    )
}

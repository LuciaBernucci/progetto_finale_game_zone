import { SlHome } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { useContext, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import routes from "../../routing/routes";
import { UserContext } from "../../context/UserContext";


export default function Navbar(){
    const[slug, setSlug]= useState("");
    const handleChange=(e)=>{
        setSlug(e.target.value);
    };
    const navigate= useNavigate();
    const { user, profile, signOut } = useContext(UserContext);

    const userLabel = useMemo(() => {
        if (!user) return "Accedi";
        const fromProfile = profile?.username || profile?.first_name;
        const fromMetadata = user?.user_metadata?.username || user?.user_metadata?.first_name;
        const fromEmail = user?.email ? user.email.split("@")[0] : null;
        return fromProfile || fromMetadata || fromEmail || "Account";
    }, [user, profile]);

    const handleLogout=async()=>{
        await signOut();
        navigate('/');
    };

    return(
        <>
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-fuchsia-400 bg-[#07070B]/80 backdrop-blur-xl">
        
        <div className="w-full px-6 lg:px-10">
        
        <div className="flex items-center justify-between h-[88px]">
        
        <div className="flex items-center gap-12">
        
        <img src="/logoNav.png" alt="GameZone Logo" className="w-[120px] object-contain transition duration-300 group-hover:scale-105"/>
        
        <div className="hidden lg:flex items-center gap-10">
        <Link className="inline-flex items-center gap-2 relative text-white font-semibold text-[15px] hover:text-fuchsia-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-fuchsia-500 after:to-blue-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300" to={routes.home}>
        <SlHome className="text-[18px]" /> Home
        </Link>
        
        <a href="#"  className="relative text-zinc-300 font-semibold text-[15px] hover:text-fuchsia-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-fuchsia-500 after:to-blue-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300" >
        Recensioni
        </a>
        
        <a href="#" className="relative text-zinc-300 font-semibold text-[15px] hover:text-fuchsia-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-fuchsia-500 after:to-blue-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300">
        News
        </a>
        
        <a href="#" className="relative text-zinc-300 font-semibold text-[15px] hover:text-fuchsia-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-fuchsia-500 after:to-blue-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300">
        Classifiche
        </a>
        
        <a href="#" className="relative text-zinc-300 font-semibold text-[15px] hover:text-fuchsia-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-fuchsia-500 after:to-blue-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300">
        Contatti
        </a>
        
        </div>
        </div>
        
        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5 shrink-0">
        
        {/* SEARCH BAR DI UIVERSE */}
        <div className="uiverse-search">
        <Link className="uiverse-search__icon" to={`/search/${slug}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#fff" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#fff" d="M22 22L20 20"></path>
        </svg>
        </Link>
        <input placeholder="search.." className="uiverse-search__input" name="text" type="text" onChange={handleChange}/>
         </div>
        
        
        {/* LOGIN BUTTON */}
        <button
        className="btn inline-flex items-center gap-2 px-6 h-11 rounded-xl font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 transition duration-300 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]"  popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }} >
         <FaRegUser className="text-[18px]"/> {userLabel}
         </button>
           <ul tabIndex={0} className="dropdown menu w-40 rounded-box  shadow-sm  border-fuchsia-400 bg-[#07070B]/80 backdrop-blur-xl  text-white    "
             popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>


                {user ? (
                    <li className="hover:text-fuchsia-400 transition duration-300" onClick={handleLogout}>
                        <p>Logout</p>
                    </li>
                ) : (
                    <>
                      <li className="hover:text-fuchsia-400 transition duration-300">
                        <Link to={routes.login}>Login</Link>
                      </li>
                      <li className="hover:text-fuchsia-400 transition duration-300">
                        <Link to={routes.register}>Register</Link>
                      </li>
                    </>
                )}
           
           </ul>
        
        </div>
        
        </div>
        
        </div>
        
        </nav>
        </>
    )
}

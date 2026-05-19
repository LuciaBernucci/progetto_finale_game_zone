import { SlHome } from "react-icons/sl";
import { PiUserList } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import routes from "../../routing/routes";
import { UserContext } from "../../context/UserContext";
import { IoNewspaperOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";


export default function Navbar(){
  const[slug, setSlug]= useState();
  const handleChange=(e)=>{
    setSlug(e.target.value);
  };
  const navigate= useNavigate();
  const { user,profile, signOut } = useContext(UserContext);
  
  
  
  const handleLogout=async()=>{
    await signOut();
    navigate('/');
  };
  
  const [mobileOpen, setMobileOpen] = useState(false);
  
  return(
    <>
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-fuchsia-400 bg-[#07070B]/80 backdrop-blur-xl">
    
    <div className="w-full px-3 sm:px-6 lg:px-10">
    
    <div className="relative flex items-center justify-between h-[72px] sm:h-[88px]">
    
    <div className="flex items-center gap-4 sm:gap-12">
    
    <img src="/logoNav.png" alt="GameZone Logo" className="w-[90px]  hidden sm:block object-contain transition duration-300 group-hover:scale-105"/>
    
    <div className="hidden lg:flex items-center gap-10">
    <Link className="inline-flex items-center gap-2 relative text-white font-semibold text-[15px] hover:text-fuchsia-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-fuchsia-500 after:to-blue-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300" to={routes.home}>
    <SlHome className="text-[18px]" /> Home
    </Link>
    {user &&(
      <Link to={routes.profile}  className="inline-flex items-center gap-2 relative text-zinc-300 font-semibold text-[15px] hover:text-fuchsia-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-fuchsia-500 after:to-blue-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300" >
      <PiUserList className="text-[25px]"/>Hi {profile?.username}!
      </Link>
    )}
    
    
    <a href="#" className="inline-flex items-center relative gap-2  text-zinc-300 font-semibold text-[15px] hover:text-fuchsia-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-fuchsia-500 after:to-blue-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300"><IoNewspaperOutline /> News</a>
    <a href="#" className="inline-flex items-center relative gap-2  text-zinc-300 font-semibold text-[15px] hover:text-fuchsia-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-fuchsia-500 after:to-blue-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300"><TfiCup /> Classifiche</a>
    <a href="#" className="inline-flex items-center relative gap-2 text-zinc-300 font-semibold text-[15px] hover:text-fuchsia-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-fuchsia-500 after:to-blue-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300"><LuPhoneCall /> Contatti</a>
    
    <div className="uiverse-search ml-50">
      <Link
      
      to={`/search/${slug}`}
      onClick={() => setMobileOpen(false)}
      >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
      <path stroke="white" strokeWidth="1.5" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7 6.25 21 11.5 21Z" />
      <path stroke="white" strokeWidth="1.5" d="M22 22L20 20" />
      </svg>
      </Link>
      
      <input
      placeholder="search.."
      className="uiverse-search__input"
      name="text"
      type="text"
      onChange={handleChange}
      />
      </div>
    </div>
    </div>
    
    {/* RIGHT SIDE */}
    <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-5 shrink-0 sm:static sm:left-auto sm:translate-x-0">
    
    
    {/* MOBILE DROPDOWN (SEARCH + LINKS) */}
    <div className="lg:hidden relative">
    {/* BUTTON */}
    <button
    onClick={() => setMobileOpen(prev => !prev)}
    className="btn px-3 h-10 rounded-xl font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 transition duration-300 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]"
    >
    Menu
    </button>
    
    {/* OVERLAY */}
    {mobileOpen && (
      <div
      className="fixed inset-0 bg-black/40 z-40"
      onClick={() => setMobileOpen(false)}
      />
    )}
    
    {/* DROPDOWN */}
    <div
    className={`
      fixed left-1/2 -translate-x-1/2 top-[76px]
      w-[90vw] max-w-sm
      rounded-box border border-fuchsia-400
      bg-[#07070B]/90 backdrop-blur-xl p-4 text-white
      shadow-sm z-50
      transition
      ${mobileOpen ? "block" : "hidden"}
    `}
      >
      {/* SEARCH */}
      <div className="uiverse-search ml-5">
      <Link
      className="uiverse-search__icon"
      to={`/search/${slug}`}
      onClick={() => setMobileOpen(false)}
      >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
      <path stroke="white" strokeWidth="1.5" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7 6.25 21 11.5 21Z" />
      <path stroke="white" strokeWidth="1.5" d="M22 22L20 20" />
      </svg>
      </Link>
      
      <input
      placeholder="search.."
      className="uiverse-search__input"
      name="text"
      type="text"
      onChange={handleChange}
      />
      </div>
      
      {/* LINKS */}
      <div className="mt-4 flex flex-col gap-3">
      
      <Link
      to={routes.home}
      onClick={() => setMobileOpen(false)}
      className="inline-flex items-center gap-2 text-white font-semibold text-[15px] hover:text-fuchsia-400"
      >
      <SlHome /> Home
      </Link>
      
      {user && (
        <Link
        to={routes.profile}
        onClick={() => setMobileOpen(false)}
        className="inline-flex items-center gap-2 text-zinc-300 font-semibold text-[15px] hover:text-fuchsia-400"
        >
        <PiUserList className="text-[25px]" />
        Hi {profile?.username}!
        </Link>
      )}
      
      <a onClick={() => setMobileOpen(false)} className="cursor-pointer text-zinc-300 hover:text-fuchsia-400 inline-flex gap-2">
      <IoNewspaperOutline /> News
      </a>
      
      <a onClick={() => setMobileOpen(false)} className="cursor-pointer text-zinc-300 hover:text-fuchsia-400 inline-flex gap-2">
      <TfiCup /> Classifiche
      </a>
      
      <a onClick={() => setMobileOpen(false)} className="cursor-pointer text-zinc-300 hover:text-fuchsia-400 inline-flex gap-2">
      <LuPhoneCall /> Contatti
      </a>
      
      </div>
      </div>
      </div>
      
      
      {/* LOGIN / LOGOUT */}
      {(!user && (
        <>
        <div className="dropdown dropdown-end">
        
        <button
        tabIndex={0}
        className="btn  inline-flex  items-center  gap-2  px-3 sm:px-6  h-10 sm:h-11  rounded-xl  font-semibold  text-sm sm:text-base  text-white  bg-gradient-to-r  from-fuchsia-600  to-blue-600  hover:from-fuchsia-500  hover:to-blue-500   transition-colors duration-300   shadow-[0_0_25px_rgba(168,85,247,0.35)]  hover:shadow-[0_0_35px_rgba(59,130,246,0.45)] "  >
        <FaRegUser className="text-[18px]" />
        Accedi
        </button>
        <ul
        tabIndex={0}  className="  dropdown-content  menu  w-40  rounded-box  mt-3  p-2  shadow  border  border-fuchsia-400  bg-[#07070B]/80  backdrop-blur-xl  text-white "
        >
        <li>
        <Link to={routes.login}>Login</Link>
        </li>
        <li>
        <Link to={routes.register}>Register</Link>
        </li>
        </ul>
        
        </div>
        </>
      )) || (
        <button onClick={handleLogout} className="btn inline-flex items-center gap-2 px-3 sm:px-6 h-10 sm:h-11 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 transition duration-300 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]" >
        <FaRegUser className="text-[18px]"/>Logout
        </button>
      )}
      
      </div>
      
      </div>
      
      </div>
      
      </nav>
      </>
    )
  }
  
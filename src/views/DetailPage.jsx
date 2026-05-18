import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";
import { SlArrowLeftCircle } from "react-icons/sl";
import HeaderDetailPage from "../components/DetailComponents/HeaderDetailPage";
import BodySection from "../components/DetailComponents/BodySection";


export default function DetailPage(){
    const game= useLoaderData();
    const navigate= useNavigate();
    const {profile}= useContext(UserContext);
    
    

    return(
        <>
          <main
          style={{
           backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${game.background_image})`,
           }}
           className="min-h-screen bg-center bg-cover bg-fixed">
           <SlArrowLeftCircle className="text-2xl sm:text-3xl fixed bottom-4 left-4 sm:bottom-6 sm:left-6 text-amber-100 bg-fuchsia-500 rounded-2xl cursor-pointer z-50"onClick={()=>navigate(-1)}/>
            <HeaderDetailPage game={game}/>
            {profile && <BodySection game={game} profile_id={profile.id}/>}
           </main>
         
        </>
    );
}

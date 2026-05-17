import { useContext, useEffect, useState } from "react"
import ImgProfile from "../../assets/ImgProfile.png"
import { UserContext } from "../../context/UserContext"
import { Link } from "react-router";
import routes from "../../routing/routes";
import { supabase } from "../../database/supabase";

export default function ProfilePage(){
  const {user,profile}= useContext(UserContext);
  const [avatarUrl, setAvatarUrl]= useState();
  const [userFavourites, setUserFavourites]= useState();

  const download_avatar= async()=>{
    if (profile){
      const {data, error}= await supabase.storage
      .from("avatars")
      .download(profile.avatar_url);
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    }
  };

  const get_favourites= async()=>{
    if(profile){
      let {data:favourites,error}= await supabase
      .from("favourites")
      .select("*")
      .eq("profile_id",profile.id);
      setUserFavourites(favourites);
    }
  }

  useEffect(()=>{
    download_avatar();
    get_favourites();
  },[profile]);

    return(
       
         <main className="h-screen">
            {user && profile && (
              <>
              <article className="mt-10 flex flex-col items-center">
                <img src={avatarUrl ?? ImgProfile} className="w-[100px] h-[100px] rounded-full" alt="Profile Image" />
                <h2 className=" text-amber-100 text-2xl font-semibold mt-5">{profile.first_name}</h2>
              </article>

              <section className=" grid grid-cols-3 gap-4 px-36 mt-10">
                <article className="p-10  border border-fuchsia-400 bg-[#07070B]/80 backdrop-blur-xl text-amber-100">
                <h3 className="font-semibold">Your Data</h3>
                <p>Name: {profile.first_name} {profile.last_name}</p>
                <p>Username: {profile.username}</p>
                <p>Email: {user.email}</p>

                <Link to={routes.profile_settings} className="btn inline-flex items-center gap-2 px-6 mt-4 h-11 rounded-xl  text-amber-100 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 transition duration-300 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]">Settings</Link>
                </article>
              </section>
              <section className="grid grid-cols-4 gap-4 my-10 w-auto">
                {userFavourites &&
                 userFavourites.map((game)=>{
                  return(
                    <div className="card bg-fuchsia-500 shadow-sm" key={game.id}>
                      <div className="card-body">
                        <h2 className="card-title text-amber-100">{game.game_name}</h2>
                      </div>
                    </div>
                  );
                 })
                }
              </section>
              </>
            )}
         </main>
        
    );
}
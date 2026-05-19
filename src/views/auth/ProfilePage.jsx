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

  
  return (
    <main className="min-h-screen w-full px-4 sm:px-8 lg:px-16 py-10 text-white">

      {user && profile && (
        <>
          {/* PROFILE HEADER */}
          <article className="mt-10 flex flex-col items-center text-center">
            <img
              src={avatarUrl ?? ImgProfile}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-fuchsia-400"
              alt="Profile"
            />

            <h2 className="text-amber-100 text-xl sm:text-2xl font-semibold mt-5">
              {profile.first_name}
            </h2>
          </article>

          {/* DATA CARD */}
          <section className="mt-10 flex justify-center">
            <article className="w-full max-w-xl p-6 sm:p-8 border border-fuchsia-400 bg-[#07070B]/80 backdrop-blur-xl text-amber-100 rounded-xl">

              <h3 className="font-semibold text-lg mb-3">Your Data</h3>

              <div className="space-y-2 text-sm sm:text-base">
                <p>
                  <span className="text-zinc-400">Name:</span>{" "}
                  {profile.first_name} {profile.last_name}
                </p>

                <p>
                  <span className="text-zinc-400">Username:</span>{" "}
                  {profile.username}
                </p>

                <p>
                  <span className="text-zinc-400">Email:</span>{" "}
                  {user.email}
                </p>
              </div>

              <Link
                to={routes.profile_settings}
                className="btn inline-flex items-center gap-2 px-6 mt-6 h-11 rounded-xl text-amber-100 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 transition shadow"
              >
                Settings
              </Link>
            </article>
          </section>

          {/* FAVOURITES */}
          <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {userFavourites?.map((game) => (
              <div
                key={game.id}
                className="card bg-fuchsia-500 backdrop-blur border shadow-sm rounded-xl"
              >
                <div className="card-body p-4">
                  <h2 className="card-title text-amber-100 text-base">
                    {game.game_name}
                  </h2>
                </div>
              </div>
            ))}
          </section>
        </>
      )}
    </main>
  );
}
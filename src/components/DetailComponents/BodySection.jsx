import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { supabase } from "../../database/supabase";

export default function BodySection({game,profile_id}){
    const [isFavourite, setIsFavourite]= useState(false);
    const [description, setDescription]= useState();
    const [gameReviews, setGameReviews]= useState();
    const [checkReview, setCheckReview]= useState(false);

    const handle_description =(e)=>{
        setDescription(e.target.value);
    };

    const get_reviews = async()=>{
        let { data: reviews,error}=await supabase
        .from("reviews")
        .select("*")
        .eq("game_id",game.id);
        setGameReviews(reviews);
    };
    
      const add_review= async()=>{
        let { data,error}=await supabase
        .from("reviews")
        .insert([
            {profile_id, game_id:game.id, game_name:game.name, description},
        ])
        .select();
        setDescription("");
        setCheckReview(!checkReview)
    };    

    const get_favourite= async()=>{
        let {data:favourites,error}= await supabase
        .from("favourites")
        .select("*")
        .eq("profile_id",profile_id)
        .eq("game_id",game.id);
        if(favourites.length > 0) setIsFavourite(true);
      
        
        
    };

    useEffect(
        ()=>{
            get_favourite()
            get_reviews();
        },[checkReview]
    );
    
    const add_game= async ()=>{
     const { data, error } = await supabase
     .from("favourites")
     .insert([{ profile_id, game_id: game.id, game_name: game.name }])
     .select();
     setIsFavourite(true);
    };  

    const remove_game= async ()=>{
        const {error}= await supabase
        .from("favourites")
        .delete()
        .eq("profile_id",profile_id)
        .eq("game_id",game.id);
        setIsFavourite(false);
    };

    return(
        <>
          <section className="grid grid-cols-1 sm:grid-cols-6 mt-10 px-4 sm:px-10 gap-4 sm:gap-0">
            <div className="order-2 sm:order-1 col-span-1 sm:col-span-5 flex flex-col items-center">
                <p className="text-amber-100 text-xl mb-5">Reviews</p>
                <textarea className="textarea w-full sm:w-1/2 border border-fuchsia-500" placeholder="Type your review" onChange={handle_description} value={description}></textarea>
                <button onClick={add_review} className="btn inline-flex justify-center gap-2 px-6 mt-2 h-11 rounded-xl text-amber-100 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 transition duration-300 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]">Send</button>
                <div className="border border-fuchsia-500 h-[200px] w-full sm:w-2/3 my-3 overflow-auto text-amber-100">
                {gameReviews && gameReviews.map((review)=>{
                    return (<p key={review.id} className="text-end mt-3 mx-2 p-2 border border-fuchsia-500 text-amber-100">{review.description}</p>

                     )
                })}
                </div>

            </div>
            <div className="order-1 sm:order-2 flex justify-end sm:justify-start">
                {(isFavourite &&(
             <FaHeart className="text-fuchsia-400 cursor-pointer text-3xl" onClick={remove_game}/>
             )) ||(
                <FaRegHeart className="text-fuchsia-400 cursor-pointer text-3xl" onClick={add_game}/>
             )
            }
            </div>
          </section>
        </>
    );
}

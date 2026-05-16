import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router";
import routes from "../../routing/routes";
import { supabase } from "../../database/supabase";

export default function ProfileSettingsPage(){
    const [file,setFile]= useState();
    const [preview,setPreview]= useState();
    const {profile,getUser}= useContext(UserContext);
    const {updateProfile}= useContext(UserContext);

    const handleChange = (e)=>{
        setFile(()=>e.target.files[0]);
    };
    useEffect(()=>{
        if(file){
            const imageUrl= URL.createObjectURL(file);
            setPreview(()=>imageUrl);
        }
    },[file]);

    const handleAvatarSubmit= async (e)=>{
       e.preventDefault();
        const fileExt= file.name.split(".").pop();
        const fileName= `${profile.id}${Math.random()}.${fileExt}`;
        await supabase.storage.from("avatars").upload(fileName,file);
        await supabase
        .from("profiles")
        .upsert({id:profile.id, avatar_url: fileName})
        .select();
        await getUser();
    };

    const{register,handleSubmit, formState:{errors},
     }=useForm();

    const navigate= useNavigate();

    const onSubmit=(data) =>{
        updateProfile(data);
       
        
        navigate(routes.profile);
        
    };

    return (
        
      
         <main className="h-screen flex justify-center items-center">
           <form className="p-10  border border-fuchsia-400 bg-[#07070B]/80 backdrop-blur-xl w-1/2"onSubmit={handleSubmit(onSubmit)}>
             <input type="text" placeholder="Name" className="input input-lg mb-5 w-full border border-fuchsia-600"
             {...register("first_name",{required:"This field is required!"})} />

             {errors.first_name &&(
                <p role="alert" className="text-red-800 mb-6">
                    {errors.first_name.message}
                </p>
             )}

               {/* last name */}
              <input type="text" placeholder="Last Name" className="input input-lg mb-5 w-full border border-fuchsia-600"
             {...register("last_name",{required:"This field is required!"})} />

             {errors.last_name &&(
                <p role="alert" className="text-red-800 mb-6">
                    {errors.last_name.message}
                </p>
             )}

              {/* username */}
              <input type="text" placeholder="Username" className="input input-lg mb-5 w-full border border-fuchsia-600"
             {...register("username",{required:"This field is required!"})} />

             {errors.username &&(
                <p role="alert" className="text-red-800 mb-6">
                    {errors.username.message}
                </p>
             )}
             <button className="btn w-50  gap-2 px-6 h-11 rounded-xl text-amber-100 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 transition duration-300 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]">Edit</button>
              </form>

            <form className="p-10 w-1/2" onSubmit={handleAvatarSubmit}>
            
               <input type="file" className=" text-white file-input-lg w-full mb-5" onChange={handleChange} />
            <div className="flex flex-col gap-4 ">
              <button className="btn w-50 inline-flex justify-center gap-2 px-6 h-11 rounded-xl text-amber-100 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 transition duration-300 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]"
               
              >
                Change Avatar
              </button>
              </div>
            </form>
         
            <img src={preview} alt="" className="w-50"/>
              
            
       

         
      </main>
      
    );
}

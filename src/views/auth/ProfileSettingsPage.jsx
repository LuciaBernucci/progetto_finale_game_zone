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
        
    <main className="min-h-screen w-full px-4 sm:px-8 lg:px-16 py-10 text-white flex items-center">

      {/* CONTAINER */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">

        {/* PROFILE FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-1/2 p-6 sm:p-10 border border-fuchsia-400 bg-[#07070B]/80 backdrop-blur-xl rounded-xl"
        >
          <h2 className="text-xl font-semibold mb-6 text-amber-100">
            Edit Profile
          </h2>

          <input
            type="text"
            placeholder="Name"
            className="input input-lg mb-4 w-full border border-fuchsia-600"
            {...register("first_name", { required: "This field is required!" })}
          />
          {errors.first_name && (
            <p className="text-red-500 mb-4">{errors.first_name.message}</p>
          )}

          <input
            type="text"
            placeholder="Last Name"
            className="input input-lg mb-4 w-full border border-fuchsia-600"
            {...register("last_name", { required: "This field is required!" })}
          />
          {errors.last_name && (
            <p className="text-red-500 mb-4">{errors.last_name.message}</p>
          )}

          <input
            type="text"
            placeholder="Username"
            className="input input-lg mb-6 w-full border border-fuchsia-600"
            {...register("username", { required: "This field is required!" })}
          />
          {errors.username && (
            <p className="text-red-500 mb-4">{errors.username.message}</p>
          )}

          <button className="btn w-full lg:w-auto px-6 h-11 rounded-xl text-amber-100 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 transition shadow">
            Save Changes
          </button>
        </form>

        {/* AVATAR FORM */}
        <form
          onSubmit={handleAvatarSubmit}
          className="w-full lg:w-1/2 p-6 sm:p-10  flex flex-col items-center gap-6"
        >
          

          {/* PREVIEW */}
          <img
            src={preview}
            alt=""
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-fuchsia-400 object-cover"
          />

          <input
            type="file"
            className="file-input file-input-bordered w-full text-white"
            onChange={handleChange}
          />

          <button className="btn w-full lg:w-auto px-6 h-11 rounded-xl text-amber-100 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 transition shadow">
            Change Avatar
          </button>
        </form>

      </div>
    </main>
  );
}
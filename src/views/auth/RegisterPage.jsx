import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import { supabase } from "../../database/supabase";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function RegisterPage(){
    const {register,handleSubmit,formState:{errors},}= useForm();
    const {signUp} =useContext(UserContext);
    const navigate= useNavigate();
    const onSubmit=async(user_data)=>{
        await signUp({
            email:user_data.email,
            password:user_data.password,
            options:{
                data:{
                    first_name:user_data.first_name,
                    last_name:user_data.last_name,
                    username:user_data.username
                }
            }
        })
        navigate('/auth/login');
    };
    
    return(
        <>
         <h1 className="text-center text-4xl mt-10 text-amber-100">Register</h1>
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

              {/* email */}
              <input type="email" placeholder="Email" className="input input-lg mb-5 w-full border border-fuchsia-600"
             {...register("email",{required:"This field is required!"})} />

             {errors.email &&(
                <p role="alert" className="text-red-800 mb-6">
                    {errors.email.message}
                </p>
             )}
              {/* password */}
              <input type="password" placeholder="Password" className="input input-lg mb-5 w-full border border-fuchsia-600"
             {...register("password",{required:"This field is required!"})} />

             {errors.password &&(
                <p role="alert" className="text-red-800 mb-6">
                    {errors.password.message}
                </p>
             )}
             <div className="flex justify-center">
               <button className="btn inline-flex justify-center gap-2 px-6 h-11 rounded-xl text-amber-100 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 transition duration-300 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]">
                 Sign In
               </button>
             </div>
           </form>
         </main>
        </>
    );
}

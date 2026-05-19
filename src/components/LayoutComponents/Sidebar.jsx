import {Link} from "react-router";
import { useNavigate } from "react-router";
import { IoGameControllerOutline } from "react-icons/io5";

export default function Sidebar({ genres }) {
  const navigate = useNavigate();
  
  
  return(
    <>
  
    <div className="w-full">

     

      {/* versione mobile con dropdown */}
      <div className="lg:hidden ">
        <h2 className="text-2xl text-amber-100 mb-2">Choose a Genre</h2>
        <select
          defaultValue=""
          onChange={(e) => navigate(`/genre/${e.target.value}`)}
          className="
            w-full
            p-3
            rounded-xl
            bg-zinc-900
            text-amber-100
            border border-fuchsia-400
            focus:outline-none
            focus:ring-2 focus:ring-fuchsia-500
            select select-bordered max-h-80 overflow-y-auto
          "
        >
           <option value="" disabled>
    Choose a genre
  </option>

          {genres.map((genre) => (
            <option key={genre.id} value={genre.slug}>
              {genre.name}
            </option>
          ))}
        </select>
          <h1
    className="flex lg:hidden text-amber-100 text-2xl sm:text-3xl items-center justify-center gap-2 mt-6" >
    <IoGameControllerOutline />
    Top 20
  </h1>
      </div>

      {/* sidebar versione desktop */}
      <h2 className="hidden lg:block text-2xl text-amber-100">
        Choose a Genre
      </h2>
      <div className="hidden lg:block mt-5 space-y-2">
          
        {genres.map((genre) => (
          <button key={genre.id} onClick={() => navigate(`/genre/${genre.slug}`)}
            className="w-full  text-left  px-4 py-2  rounded-xl  text-zinc-300  hover:text-fuchsia-400  hover:bg-fuchsia-500/10  transitio">
            {genre.name}
          </button>
        ))}
      </div>

    </div>
     </>
  )
}

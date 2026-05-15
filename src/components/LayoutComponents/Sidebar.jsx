import {Link} from "react-router";

export default function Sidebar({genres}){
    return(
        <>
          <nav className="lg:sticky lg:top-[100px] lg:h-[112vh] overflow-y-auto bg-[#07070B]/80 backdrop-blur-xl rounded-xl border border-fuchsia-400 mt-5">
           <ul className="px-5 py-5">
            {genres.map((genre)=>{
                return(
                  <li className="mb-7.5 text-zinc-300 font-semibold text-[15px] hover:text-fuchsia-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-fuchsia-500 after:to-blue-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300" key={genre.id}>
                    <Link to={`/genre/${genre.slug}`}>{genre.name}</Link>
                  </li>
                );
            })}
           </ul>
          </nav>
        </>
    )
}

import { useLoaderData, useParams,useOutletContext } from "react-router"
import GameList from "../components/HomeComponents/GameList";
import Sidebar from "../components/LayoutComponents/Sidebar";

export default function GenrePage(){
  const games = useLoaderData();
  const {slug}= useParams();
  const { genres } = useOutletContext();
  return(
    <>
    <section className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-4">
    <aside className="lg:col-span-2">
    <Sidebar genres={genres}/>
    </aside>
    <div className="lg:col-span-5 min-w-0">
    <h1 className="text-center text-amber-100 text-3xl mt-5">Filtered by genre: {slug}</h1>
    <GameList>
    {games.map((game)=>{
      return <GameList.Card key={game.id} game={game}/>
    })}
    </GameList>
    </div>
    </section>
    </>
  )
}
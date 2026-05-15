import { useLoaderData, useOutletContext } from "react-router"
import GameList from "../components/HomeComponents/GameList";
import Header from "../components/HomeComponents/Header";
import Sidebar from "../components/LayoutComponents/Sidebar";

export default function Homepage(){
    const games = useLoaderData();
    const { genres } = useOutletContext();
    
    
    return(
        <>
        <Header/>
        <section className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-4">
        <aside className="lg:col-span-2">
        <Sidebar genres={genres}/>
        </aside>
        <div className="lg:col-span-5 min-w-0">
        <GameList>
        {games.map((game)=>{
            return(
                <GameList.Card key={game.id} game={game}/>
            )
        })}
        </GameList>
        </div>
        </section>
        
        </>
    )
}

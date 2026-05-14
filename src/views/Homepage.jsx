import { useLoaderData } from "react-router"
import GameList from "../components/HomeComponents/GameList";
import Header from "../components/HomeComponents/Header";

export default function Homepage(){
    const games = useLoaderData();
    console.log(games);
    
    return(
        <>
          <Header/>
          <GameList>
              {games.map((game)=>{
                return(
                    <GameList.Card key={game.id} game={game}/>
                )
                
              })}
              
          </GameList>    
           
        </>
    )
}
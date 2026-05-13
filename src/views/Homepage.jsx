import { useLoaderData } from "react-router"

export default function Homepage(){
    const games = useLoaderData();
    console.log(games);
    
    return(
        <>
          <h1>Game Zone</h1> 
          <h2>hello</h2>    
           
        </>
    )
}
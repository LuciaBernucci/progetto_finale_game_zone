export async function getAllGamesLoader(){
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`);
    const json = await promise.json();
    return json.results;
}
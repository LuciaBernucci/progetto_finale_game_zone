// LOADER PER IL CARICAMENTO DI TUTTI I GIOCHI
export async function getAllGamesLoader(){
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`);
    const json = await promise.json();
    return json.results;
}
// LOADER PER RICERCA IN SEARCH BAR
export async function getSearchedGames({params}){
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${params.slug}`);
    const json = await promise.json();
    return json.results;
}


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

// LOADER PER TUTTI I GENERI DI GIOCO


export async function getAllGenres(){
    const promise = await fetch(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`);
    const json = await promise.json();
    return json.results;
}

// LOADER GIOCHI FILTRATI PER GENERE
export async function getFilteredByGenreGames({params}){
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&genres=${params.slug}`);
    const json = await promise.json();
    return json.results;
}
// LOADER GIOCHI DETTAGLI
export async function getGameDetails({params}){
    const promise = await fetch(`https://api.rawg.io/api/games/${params.id}?key=${import.meta.env.VITE_API_KEY}`);
    const json = await promise.json();
    return json;
}


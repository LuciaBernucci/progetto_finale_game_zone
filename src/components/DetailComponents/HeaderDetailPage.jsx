export default function HeaderDetailPage({game}){
    return(
        <>
         <header className="pt-10 text-amber-100">
            <h1 className="text-center text-5xl mb-2 font-semibold">{game.name}</h1>
            <h2 className="text-center text-2xl">
                Relased on: <span className="font-semibold">{game.released}</span>
            </h2>
            <section className="grid grid-cols-2 gap-4 mt-10">
                <article className="px-10 font-montserrat text-2xl">
                    <p>{game.description_raw}</p>
                </article>
                <article className="text-center">
                    <p className="text-xl mb-5"><span className="font-semibold">Rating: </span>{game.rating}</p>
                    <p className="text-xl font-semibold">Genres:</p>
                    <ul className="flex justify-center">
                        {game.genres.map((genre)=>{
                            return <li className="mx-3"key={genre.id}>{genre.name}</li>
                        })}
                    </ul>
                </article>
            </section>
         </header>
        </>
    );
}
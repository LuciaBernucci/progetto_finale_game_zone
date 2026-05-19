import { IoGameControllerOutline } from "react-icons/io5";

export default function Header(){
    return (
        <>
         <header className="w-full overflow-hidden">
            <img src="/Header.png" alt="immagine header di Game Zone" className=" w-full h-32 sm:h-40 lg:h-auto object-cover lg:object-contain block border border-fuchsia-400"/>
             <h1 className="hidden lg:flex text-amber-100 text-center mt-10 text-3xl items-center justify-center gap-2"> <IoGameControllerOutline /> Top 20</h1>
         </header>
         
        
        </>
    )
}

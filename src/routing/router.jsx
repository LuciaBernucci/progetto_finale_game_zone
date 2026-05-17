import { createBrowserRouter } from "react-router";
import Layout from "../components/Layouts/Layout";
import Homepage from "../views/Homepage";
import routes from "./routes";
import { getAllGamesLoader, getAllGenres, getFilteredByGenreGames, getGameDetails, getSearchedGames } from "./loaders";
import SearchPage from "../views/SearchPage";
import GenrePage from "../views/GenrePage";
import AutenticationLayout from "../components/Layouts/AutenticationLayout";
import RegisterPage from "../views/auth/RegisterPage";
import LoginPage from "../views/auth/LoginPage";
import ProfilePage from "../views/auth/ProfilePage";
import ProfileSettingsPage from "../views/auth/ProfileSettingsPage";
import DetailPage from "../views/DetailPage";



const router = createBrowserRouter([
    {
        path: routes.home,
        Component: Layout,
        loader: getAllGenres,
        children:[
            {
                path: routes.home,
                Component: Homepage,
                loader: getAllGamesLoader
            },
            {
                path: routes.search,
                Component: SearchPage,
                loader: getSearchedGames
            },
            {
                path: routes.genre,
                Component: GenrePage,
                loader: getFilteredByGenreGames
            },
            
            {
                path:'/auth',
                Component: AutenticationLayout,
                children:[
                    {
                        path: routes.register,
                        Component: RegisterPage
                    },
                    {
                        path: routes.login,
                        Component: LoginPage
                    },
                    {
                        path: routes.profile,
                        Component: ProfilePage
                    },
                    {
                        path: routes.profile_settings,
                        Component: ProfileSettingsPage
                    },
                    
                ],
            },
            
            
        ],
    },
    {
        path:routes.detail,
        Component:DetailPage,
        loader:getGameDetails
        
    },
    
    
    
]);

export default router;


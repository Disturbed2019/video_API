import Admin from "./pages/Admin";
import Auth from "./pages/AuthPage/Auth";
import Main from './pages/MainPage/Main';
import FilmPage from "./pages/FilmPage/FilmPage";
import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    MAIN_ROUTE,
    FILM_ROUTE,
    ADD_FILM,
    USERS_ROUTE
} from "./utils/const";
import AdminPage from "./pages/AdminPage/AdminPage";
import UsersPage from "./pages/UsersPage/UsersPage";





export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: ADD_FILM,
        Component: Admin
    },
    {
        path: USERS_ROUTE,
        Component: UsersPage
    }

]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main

    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: FILM_ROUTE + '/:id',
        Component: FilmPage
    }

]
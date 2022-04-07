import React from "react";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import AppRouter from "./AppRouter";
import {observer} from "mobx-react-lite";



const App = observer( () => {


    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
})



export default App;

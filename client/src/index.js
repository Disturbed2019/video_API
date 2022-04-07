import React,{createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import UserStore from "./store/userStore";
import FilmsStore from "./store/filmsStore";

export const Context = createContext(null)


ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        films: new FilmsStore(),
    }}>
        <App />
    </Context.Provider>
    , document.getElementById('root'));



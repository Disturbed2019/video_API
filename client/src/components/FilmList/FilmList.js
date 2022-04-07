import React, {useContext, Fragment} from 'react';
import {observer} from "mobx-react-lite";
import FilmItem from "../FilmItem/FilmItem";
import {Context} from '../../index'

const FilmList = observer( () => {
    const {films} = useContext(Context)
    return (
       <Fragment>
            {films.films.map(film =>
                <FilmItem key={film._id} film={film}/>
            )}
       </Fragment>

    );
});

export default FilmList;

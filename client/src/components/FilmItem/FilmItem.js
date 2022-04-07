import React from 'react';
import {useHistory} from 'react-router-dom'
import {FILM_ROUTE} from "../../utils/const";

const FilmItem = ({film}) => {
    const history = useHistory()
    return (

        <div className={'films__card'}
             onClick={() => history.push(FILM_ROUTE + '/' + film._id)}
        >
            <img
                className={'films__img'}
                width={160}
                height={250}
                src={"./assets/posters/"+ film.preview_img}
                alt={film.title}
            />
            <span className={'films__rating'}>{film.rating}</span>

        </div>

    );
};

export default FilmItem;

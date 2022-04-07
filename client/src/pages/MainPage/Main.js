import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import FilmList from "../../components/FilmList/FilmList";
import {Context} from '../../index'
import {fetchCategories, fetchFilms} from "../../utils/filmsAPI";
import Container from "@mui/material/Container";
import CategoriesBar from "../../components/CategoriesBar/CategoriesBar";
import CircularProgress from "@mui/material/CircularProgress";


const Main = observer( () => {
    const {films} = useContext(Context)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetchCategories().then(data => films.setCategories(data))
        fetchFilms(null).then(data => {
            films.setFilms(data)
        }).finally(()=> setLoading(false))
    }, [])

    useEffect(() => {
        fetchFilms(films.selectedCategories.name).then(data => {
            films.setFilms(data)

        }).finally(()=> setLoading(false))
    },[films.selectedCategories])





    return (
        <Container>
            <CategoriesBar/>
            <div className={'films'}>
                {loading ? <CircularProgress /> : <FilmList/>}
            </div>
        </Container>

    );
});

export default Main;

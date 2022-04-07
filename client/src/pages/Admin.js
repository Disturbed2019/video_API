import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {createFilms} from "../utils/filmsAPI";
import {observer} from "mobx-react-lite";
import {FormControl, FormHelperText, Input} from "@mui/material";
import Button from "@mui/material/Button";







const Admin = observer( () => {
    // const {films} = useContext(Context)
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    const [link, setLink] = useState('')
    const [poster, setPoster] = useState(null)
    const [bg, setBg] = useState(null)




    const addDevice = () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('year', year)
        formData.append('category', category)
        formData.append('description', description)
        formData.append('rating', rating)
        formData.append('trailer_link', link)
        formData.append('preview_img', poster)
        formData.append('bg_img', bg)
        createFilms(formData).then(data => console.log('фильм создан', data))
    }



    return (
        <div>
            Добавление фильма

            <form action="">
                <FormControl  className={'auth__control'}>
                    <Input
                        placeholder={'Введите название'}
                        type={'text'}
                        name={'title'}
                        id="title"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        aria-describedby="my-helper-text"
                    />
                    {/*<FormHelperText id="my-helper-text">{error}</FormHelperText>*/}

                </FormControl>
                <FormControl className={'auth__control'}>
                    <Input
                        placeholder={'Введите год'}
                        type={'text'}
                        name={'year'}
                        id="year"
                        value={year}
                        onChange={event => setYear(event.target.value)}
                        aria-describedby="my-helper-text"
                    />
                </FormControl>
                <FormControl className={'auth__control'}>
                    <Input
                        placeholder={'Введите категрию'}
                        type={'text'}
                        name={'category'}
                        id="category"
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                        aria-describedby="my-helper-text"
                    />
                </FormControl>
                <FormControl className={'auth__control'}>
                    <Input
                        placeholder={'Введите описание'}
                        type={'text'}
                        name={'description'}
                        id="description"
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                        aria-describedby="my-helper-text"
                    />
                </FormControl>
                <FormControl className={'auth__control'}>
                    <Input
                        placeholder={'Введите рейтинг'}
                        type={'text'}
                        name={'rating'}
                        id="rating"
                        value={rating}
                        onChange={event => setRating(event.target.value)}
                        aria-describedby="my-helper-text"
                    />
                </FormControl>
                <FormControl className={'auth__control'}>
                    <Input
                        placeholder={'Введите ссылку'}
                        type={'text'}
                        name={'trailer_link'}
                        id="link"
                        value={link}
                        onChange={event => setLink(event.target.value)}
                        aria-describedby="my-helper-text"
                    />
                </FormControl>
                <FormControl className={'auth__control'}>
                    <Input
                        placeholder={'poster'}
                        type={'file'}
                        id="poster"
                        onChange={event => setPoster(event.target.files[0])}

                        aria-describedby="my-helper-text"
                    />
                </FormControl>
                <FormControl className={'auth__control'}>
                    <Input
                        placeholder={'bg'}
                        type={'file'}
                        id="bg"
                        onChange={event => setBg(event.target.files[0])}
                        // onChange={event => setLink(event.target.value)}
                        aria-describedby="my-helper-text"
                    />
                </FormControl>
            </form>
            <Button variant="outlined" onClick={addDevice}>Добавить</Button>
        </div>
    );
});

export default Admin;

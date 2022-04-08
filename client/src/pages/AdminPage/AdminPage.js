import React from 'react';
import {useHistory} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import {Container,Button} from "@mui/material";
import {ADD_FILM, USERS_ROUTE} from "../../utils/const";

const AdminPage = observer( () => {
    const history = useHistory()
    return (
        <div>
            <Container>
                <Button
                    variant={'outlined'}
                    onClick={()=> history.push(ADD_FILM)}
                >
                    Добавить фильм
                </Button>
                <Button
                    variant={'outlined'}
                    onClick={()=> history.push(USERS_ROUTE)}
                >
                    Пользователи
                </Button>
            </Container>


        </div>
    );
});

export default AdminPage;

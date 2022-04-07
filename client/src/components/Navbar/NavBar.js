import React, {useContext} from 'react';
import {Context} from "../../index";
import {NavLink, useHistory} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE} from "../../utils/const";
import {observer} from "mobx-react-lite";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = ()=> {
        user.setUser({})
        user.setIsAuth(false)
    }



    return (
        <div className={'navbar'}>
            <Container>
                <div className="navbar__wrapper">
                    <NavLink to={MAIN_ROUTE}>LOGO</NavLink>

                    {user.isAuth ?
                        <div className="ml-auto" style={{color: 'white'}}>


                            <ButtonGroup variant="outlined" aria-label="outlined button group">

                                <Button
                                    onClick={() => history.push(ADMIN_ROUTE)}
                                >
                                    Админ панель
                                </Button>
                                <Button
                                    onClick={() => logOut()}
                                >
                                    Выйти
                                </Button>

                            </ButtonGroup>

                        </div>
                        :
                        <div className="ml-auto" >
                            <Button variant="outlined" onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                        </div>
                    }
                </div>
            </Container>
        </div>
    );
});

export default NavBar;

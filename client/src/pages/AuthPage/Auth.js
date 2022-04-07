import React, {useContext, useState} from 'react';
import {useLocation, useHistory, NavLink} from 'react-router-dom'
import {Container,Card,CardContent,CardActions,Button,FormControl,FormHelperText,Input} from "@mui/material";
import {Context} from "../../index";
import {login, registration} from "../../utils/userAPI";
import {observer} from "mobx-react-lite";
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/const";


const Auth = observer( () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const clickHandler = async () => {
        try {
            let data;
            if (isLogin) {
                data =  await login(email, password);
            } else {
                data =  await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(MAIN_ROUTE)
        } catch (e) {
            setError(e.response.data.message)

        }
    }

    return (
        <div className={'auth'}>
            <Container>
                <div className="auth__wrapper">
                    <Card sx={{ maxWidth: 360 }}>
                        <CardContent>
                            <h2 className="auth__title">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                            <form action="">
                            <FormControl  className={'auth__control'}>
                                <Input
                                    placeholder={'Введите email'}
                                    id="email"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    aria-describedby="my-helper-text"
                                />
                                <FormHelperText id="my-helper-text">{error}</FormHelperText>

                            </FormControl>
                            <FormControl className={'auth__control'}>
                                <Input
                                    autoComplete={"on"}
                                    placeholder={'Введите пароль'}
                                    type={'password'}
                                    id="password"
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                    aria-describedby="my-helper-text"
                                />
                            </FormControl>
                            </form>
                        </CardContent>


                        <CardActions>
                            <Button
                                style={{width:'100%'}}
                                variant={"contained"}
                                onClick={clickHandler}
                            >
                                {isLogin ? 'Войти' : 'Зарегистрироваться'}
                            </Button>
                        </CardActions>

                        <div className={'auth__text'}>
                            {isLogin ?
                                <div>
                                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                                </div>
                                :
                                <div>
                                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                                </div>
                            }
                        </div>
                    </Card>
                </div>





                {/*<h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>*/}
                {/*<Form className="d-flex flex-column">*/}
                {/*    <Form.Control*/}
                {/*        className="mt-3"*/}
                {/*        placeholder="Введите ваш email..."*/}
                {/*        value={email}*/}
                {/*        onChange={e => setEmail(e.target.value)}*/}
                {/*    />*/}
                {/*    <Form.Control*/}
                {/*        className="mt-3"*/}
                {/*        placeholder="Введите ваш пароль..."*/}
                {/*        value={password}*/}
                {/*        onChange={e => setPassword(e.target.value)}*/}
                {/*        type="password"*/}
                {/*    />*/}
                {/*    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">*/}
                {/*        {isLogin ?*/}
                {/*            <div>*/}
                {/*                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>*/}
                {/*            </div>*/}
                {/*            :*/}
                {/*            <div>*/}
                {/*                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>*/}
                {/*            </div>*/}
                {/*        }*/}
                {/*        <Button*/}
                {/*            variant={"outline-success"}*/}
                {/*            onClick={click}*/}
                {/*        >*/}
                {/*            {isLogin ? 'Войти' : 'Регистрация'}*/}
                {/*        </Button>*/}
                {/*    </Row>*/}

                {/*</Form>*/}

            </Container>

        </div>
    );
});

export default Auth;

import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchUsers} from "../../utils/userAPI";
import {Container} from "@mui/material";

const UsersPage = observer( () => {
    const {user} = useContext(Context)

    useEffect(() => {
        fetchUsers().then(data => user.setUsers(data))

    }, [])



    return (
        <div>
            <Container>
                {user.users.map(item =>
                    <div style={{color:'white'}}>
                    <p>{item._id}</p>
                    <p>{item.email}</p>
                    <p>{item.password}</p>
                    </div>

                )}
            </Container>



        </div>
    );
});

export default UsersPage;

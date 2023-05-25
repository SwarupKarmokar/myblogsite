import React, { useContext } from 'react'
import Login from '../../pages/login/Login';
import Home from '../../pages/home/Home';
import { Context } from '../../context/Context';

const isLogged = () => {
    const { user } = useContext(Context);
    // const user = false

    return (
        <div>
            {
                user ? <Home /> : <Login />
            }
        </div>
    )

}

export default isLogged
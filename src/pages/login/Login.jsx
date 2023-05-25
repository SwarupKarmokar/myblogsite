import { useContext, useEffect, useRef } from 'react';
import './Login.css'
import { Context } from '../../context/Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../utils/url';

const Login = () => {

    const userRef = useRef()
    const passwordRef = useRef()

    const { dispatch, isFetching } = useContext(Context);
    // const { user, dispatch, isFetching } = useContext(Context);
    const navigate = useNavigate();

    const loginHandle = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post(`${baseUrl}api/auth/login`, {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })

            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            navigate('/')
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" })
        }
    }

    // console.log(user)



    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={loginHandle}>
                <label htmlFor="">Username</label>
                <input className='loginInput' type="text" placeholder='Enter Your Username' ref={userRef} />
                <label htmlFor="">Password</label>
                <input className='loginInput' type="password" placeholder='Enter Your Password' ref={passwordRef} />
                <button className="loginButton" type='submit' disabled={isFetching}>Login</button>
            </form>
        </div>
    )
}

export default Login
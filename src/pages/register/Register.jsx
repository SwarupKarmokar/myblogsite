import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Register.css'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        // setError(false)
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                username, email, password
            })
            navigate('/login')
        }
        catch (err) {
            setError(true);
        }
    }

    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input className='registerInput' type="text" placeholder='Enter Your Name' onChange={e => setUsername(e.target.value)} />
                <label htmlFor="">Email</label>
                <input className='registerInput' type="email" placeholder='Enter Your Email' onChange={e => setEmail(e.target.value)} />
                <label htmlFor="">Password</label>
                <input className='registerInput' type="password" placeholder='Enter Your Password' onChange={e => setPassword(e.target.value)} />
                <button className="registerButton" type='submit'>Register</button>
            </form>
            {
                error && <span style={{ color: "red" }}>Somthing went wrong</span>
            }
        </div>
    )
}

export default Register
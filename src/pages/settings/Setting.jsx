import Sidebar from '../../components/Sidebar/Sidebar'
import { UserAddOutlined } from '@ant-design/icons/lib/icons'
import './Setting.css'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../utils/url'


const Setting = () => {
    const { user, dispatch } = useContext(Context)
    const PF = `${baseUrl}images`

    const [file, setFile] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false)


    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" })
        const updatedUser = {
            userId: user._id,
            username, email, password
        }

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append('file', file)
            updatedUser.profilePic = filename

            try {
                await axios.post(`${baseUrl}api/uploads`, data)
            } catch (err) {

            }
        }
        try {
            const res = await axios.put(`${baseUrl}api/user/` + user._id, updatedUser)
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
            setSuccess(true)
            navigate('/')

        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" })
        }
    }

    return (
        <div className='settings'>
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form className="settingForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" />
                        <label htmlFor="fileInput">
                            <UserAddOutlined style={{ fontSize: 35, cursor: 'pointer' }} />
                        </label>
                        <input type="file" id='fileInput' style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
                    </div>

                    <label htmlFor="">User Name</label>
                    <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="settingSubmit" type='submit'>Submit</button>
                    {
                        success && <span>Successfully Updated</span>
                    }
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Setting
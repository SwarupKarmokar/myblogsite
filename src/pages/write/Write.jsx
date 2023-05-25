import { useContext, useState } from 'react'
import axios from 'axios'
import { PlusCircleOutlined } from '@ant-design/icons/lib/icons'
import { Context } from '../../context/Context'
import { useNavigate } from 'react-router-dom'
import './Write.css'


const Write = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const { user } = useContext(Context)

    const handleWrite = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc
        }

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append('file', file)
            newPost.photo = filename

            try {
                await axios.post("https://myblogsitebackend.vercel.app/api/uploads", data)
            } catch (err) {

            }
        }
        try {
            const res = axios.post("https://myblogsitebackend.vercel.app/api/post", newPost)
            // window.location.replace("http://localhost:5000/api/post/" + res.data._id)
            navigate('/')
        } catch (err) {

        }
    }
    return (
        <div className='write'>
            {file && (
                <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
            )}

            <form className="writeForm" onSubmit={handleWrite}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <PlusCircleOutlined style={{ fontSize: 25 }} />
                    </label>
                    <input type="file" id='fileInput' style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />

                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={e => setTitle(e.target.value)} />
                </div>

                <div className="writeFormGroup">
                    <textarea placeholder='Tell your thought' type='text' className='writeInput writeText' onChange={e => setDesc(e.target.value)}></textarea>
                </div>

                <button className="writeSubmit" type='submit'>Publish</button>
            </form>
        </div>
    )
}

export default Write
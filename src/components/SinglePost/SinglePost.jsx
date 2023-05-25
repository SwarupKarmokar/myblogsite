import { Link, useLocation, useNavigate } from 'react-router-dom'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons/lib/icons'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import './SinglePost.css'
import { Context } from '../../context/Context'

const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const [post, setPost] = useState({});
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [updateMode, setUpdateMode] = useState(false);

    const publicFolder = "https://myblogsitebackend.vercel.app/images/"
    const { user } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        const getPost = async () => {
            const result = await axios.get('https://myblogsitebackend.vercel.app/api/post/' + path);
            // console.log(result)
            setPost(result.data)
            setTitle(result.data.title)
            setDesc(result.data.desc)
        }
        getPost()
    }, [path])

    const handleDelete = async () => {
        await axios.delete(`https://myblogsitebackend.vercel.app/api/post/${post._id}`, { data: { username: user.username } })
        navigate('/')
    }

    const handleUpdate = async () => {
        await axios.put(`https://myblogsitebackend.vercel.app/api/post/${post._id}`, { username: user.username, title, desc })
        // window.location.reload();
        setUpdateMode(false)
    }

    return (
        <div className='singlepost'>
            <div className="singlepostWrapper">
                <img src={publicFolder + post.photo} alt="" className="singlepostImg" />

                {
                    updateMode ? <input type='text' value={title} className='singlepostTitleInput' autoFocus onChange={(e) => setTitle(e.target.value)} /> :
                        <h1 className="singlepostTitle">
                            {title}
                            {
                                post.username === user?.username &&
                                <div className="singlepostEdit">
                                    <EditOutlined onClick={() => setUpdateMode(true)} />
                                    <DeleteOutlined style={{ color: 'red' }} onClick={handleDelete} />
                                </div>
                            }
                        </h1>
                }
            </div>
            <div className="singlepostInfo">
                <span className='author'>Author:
                    <Link to={`/?user=${post.username}`} className='link'>
                        <b>{post.username}</b>
                    </Link>
                </span>
                <span className='date'>{new Date(post.createdAt).toDateString()}</span>
            </div>

            {
                updateMode ? <textarea className='singlepostDescInput' value={desc} onChange={(e) => setDesc(e.target.value)} /> :
                    <p className='singlepostDesc'>
                        {desc}
                    </p>
            }

            {
                updateMode &&
                <button className="singlePostButton" onClick={handleUpdate}>
                    Update
                </button>
            }

        </div >
    )
}

export default SinglePost
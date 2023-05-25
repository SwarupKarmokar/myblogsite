import { Link } from 'react-router-dom'
import './PostStyle.css'

const Post = ({ post }) => {
    const publicFolder = "https://myblogsitebackend.vercel.app/images/"
    return (
        <div className='post'>
            <img src={publicFolder + post.photo} alt="" className="postImg" />

            <div className="postInfo">
                <div className="postCats">
                    {/* <span className="postCat">Music</span>
                    <span className="postCat">Life</span> */}

                    {
                        post.categories.map(cat => (
                            <span className="postCat">{cat.name}</span>
                        ))
                    }
                </div>
                <Link to={`/post/${post._id}`} style={{ textDecoration: "none", color: "lightcoral" }}>
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='postDesc'>
                {post.desc}
            </p>
        </div>
    )
}

export default Post
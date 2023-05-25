import Post from '../Post/Post'
import './PostStyle.css'

const Posts = ({ posts }) => {
    return (
        <div className='posts'>
            {
                posts.map(post => (
                    <Post post={post} />
                ))
            }
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
        </div>
    )
}

export default Posts
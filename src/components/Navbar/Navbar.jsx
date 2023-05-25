import React, { useContext } from 'react'
import './NavStyle.css'
import { FacebookFilled, InstagramFilled, LinkedinFilled, SearchOutlined, TwitterSquareFilled } from '@ant-design/icons/lib/icons'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'

const Navbar = () => {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images"
    // const user = false
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    return (
        <div className='top'>
            {/* adding social icons */}
            <div className="topLeft">
                {/* <FacebookFilled />
                <TwitterSquareFilled />
                <LinkedinFilled />
                <InstagramFilled /> */}
                <h4 style={{ fontFamily: "cursive" }}>@masterblog</h4>
            </div>

            {/* adding links  */}
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to={'/'}>Home</Link>
                    </li>
                    {/* <li className="topListItem">
                        <Link className='link' to={'/about'}>About</Link>
                    </li> */}
                    <li className="topListItem">
                        <Link className='link' to={'/write'}>Write</Link>
                    </li>
                    {/* <li className="topListItem">
                        <Link className='link' to={'/contact'}>Contact</Link>
                    </li> */}
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "Logout"}
                    </li>
                </ul>
            </div>

            {/* profile section  */}
            <div className="topRight">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to={'/login'} className='link'>{user ? user.username : "login"}</Link>
                    </li>
                    {/* <li className="topListItem">
                        <Link to={'/register'} className='link'>Register</Link>
                    </li> */}
                </ul>
                {/* <SearchOutlined /> */}
                {/* <img className='topImg' src="https://avatars.githubusercontent.com/u/59216779?s=400&u=4989ec129d639c27943fd0539b800bc3a2abbb24&v=4" alt="Oops" /> */}
                <Link to={'/settings'}>
                    {
                        user ? user.profilePic !== "" ? <img src={user.profilePic} alt="" className='topImg' /> : <img src='https://img.freepik.com/premium-vector/cute-australian-shepherd-dog-avatar-cartoon_357749-252.jpg?w=2000' alt='' className='topImg' /> : <img src='https://img.freepik.com/premium-vector/cute-australian-shepherd-dog-avatar-cartoon_357749-252.jpg?w=2000' alt='' className='topImg' />
                    }
                </Link>
            </div>
        </div>
    )
}

export default Navbar
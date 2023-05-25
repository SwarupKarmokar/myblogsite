import { FacebookFilled, InstagramFilled, LinkedinFilled, SearchOutlined, TwitterSquareFilled } from '@ant-design/icons/lib/icons'

import './SidebarStyle.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { baseUrl } from '../../utils/url';

const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const result = await axios.get(`${baseUrl}api/categories`)
            setCats(result.data)
        }

        getCats()
    }, [])

    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://avatars.githubusercontent.com/u/59216779?s=400&u=4989ec129d639c27943fd0539b800bc3a2abbb24&v=4" alt="" />
                <p>
                    My name is Swarup.. I am a B.tech graduate who loves to code in python... But later realize that without frontend no one can see the project which i want to showcase. thats why i learn javascript and then i slowly grabs the knowledge of fullstack techstack like React and Express.
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {
                        cats.map(cat => (
                            <Link to={`/?cat=${cat.name}`} className='link'>
                                <li className="sidebarListItem">{cat.name}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <FacebookFilled />
                    <TwitterSquareFilled />
                    <LinkedinFilled />
                    <InstagramFilled />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
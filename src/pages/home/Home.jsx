import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'
import axios from 'axios'

const baseUrl = "http://localhost:5000/api";

import './HomeStyle.css'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const [posts, setPosts] = useState([]);

    // FINDING USER SPECIFIC OR CATEGORY SPECIFIC DATA 
    const { search } = useLocation();


    useEffect(() => {
        fetchPosts();
    }, [search])

    const fetchPosts = async () => {
        // let posts = await fetch(`${baseUrl}/post`)
        // posts = await posts.json()
        // console.log(posts)
        const result = await axios.get(`${baseUrl}/post` + search)
        setPosts(result.data)
    }

    return (
        <>
            <Header />
            <div className='home'>
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}

export default Home
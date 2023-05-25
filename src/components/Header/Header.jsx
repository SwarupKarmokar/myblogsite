import React from 'react'
import './HeaderStyle.css'

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className='headerTitleSm'>React and Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <div className="headerImg">
                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Oops" />
            </div>
        </div>
    )
}

export default Header
// import React from 'react'
import Navbar from '../components/NavBar'
import Logo from '../assets/PerceptionPause_logo.png'

function Profile() {
    return (
        <div>
            <Navbar/>
            <a href="https://react.dev" target="_blank">
            <img src={Logo} className="logo" alt="logo" />
            </a>
                <div>Profile Page</div>    
            </div>
    )
}

export default Profile
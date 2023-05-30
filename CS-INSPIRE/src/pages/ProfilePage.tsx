// import React from 'react'
import React, {useState} from 'react';
import Navbar from '../components/NavBarLogin.tsx'
import Logo from '../assets/PerceptionPause_logo.png'
import { getAuth, updateEmail } from "firebase/auth";



function Profile() {
    const auth = getAuth();
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    updateEmail(auth.currentUser, email).then(() => {
    // Email updated!
    // ...
    }).catch((error) => {
    // An error occurred
    // ...
        const errorMessage = error.message;
        setError(errorMessage)
    });

    return (
        <div>
            <Navbar></Navbar>
            <a href="https://react.dev" target="_blank">
            <img src={Logo} className="logo" alt="logo" />
            </a>
                <div>Profile Page</div>    
            <label for="newemail">New Email:</label>
            <input type="text"/>
            <button onClick={updateEmail}>Update </button>
            { error }
        </div>
            
    )
}

export default Profile
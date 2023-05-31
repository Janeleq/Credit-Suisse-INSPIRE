// import React from 'react'
import React, { useState, useEffect } from 'react';
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

    const [isLoading, setLoading] = useState(true);
  
    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
      return new Promise(resolve => setTimeout(() => resolve(), 0));
    } 
  
    useEffect(() => {
      someRequest().then(() => {
        const loaderElement = document.querySelector(".loader-container");
        if (loaderElement) {
          loaderElement.remove();
          setLoading(!isLoading);
        }
      });
    });

    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-5 container-fluid'>
              <a href="https://react.dev" target="_blank">
              <img src={Logo} className="logo" alt="logo" />
              </a>
                  <div>Profile Page</div>    
              <label for="newemail">New Email:</label>
              <input type="text"/>
              <button onClick={updateEmail}>Update </button>
              { error }
            </div>
         
        </div>
            
    )
}

export default Profile
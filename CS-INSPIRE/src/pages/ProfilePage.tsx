// import React from 'react'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBarLogin.tsx'
import Logo from '../assets/PerceptionPause_logo.png'
import { getAuth, updateEmail, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Profile() {
    const auth = getAuth();
    const navigate = useNavigate();
    const user = auth.currentUser;
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    
    console.log(user)

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
    },
    );

    useEffect(() => {
        if (user !== null) {
            user.providerData.forEach((profile) => {
              console.log("Sign-in provider: " + profile.providerId);
              console.log("  Provider-specific UID: " + profile.uid);
              console.log("  Name: " + profile.displayName);
              setName(profile.displayName)
              console.log("  Email: " + profile.email);
              setEmail(profile.email)
              console.log("  Photo URL: " + profile.photoURL);
              setPhoto(profile.photoURL)
            });
          }
    })

    
    // Sign out the user if log out button is clicked
    function signout (){
        signOut(auth).then(() => {
            // Sign-out successful.
            if (confirm ('Are you sure you want to sign out?')) {
                alert("Sign out successful!")  
                navigate('/')  
            }
            
          }).catch((error) => {
            // An error happened.
            alert("Error in signing out!")
          });
    }


    return (
        <div className='container-fluid'>
            <Navbar></Navbar>           
            <section className="section about-section gray-bg" id="about" style={{marginTop: '18vh'}}>
                <div className="row align-items-center ">
                <div className="col-lg-4">
                        <div className="about-avatar">
                            <img src="" title="" alt="Profile Pic"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">Name</h3>
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        {/* <label>Name: &nbsp;</label> */}
                                        <p>{ name }</p>
                                    </div>
                                    <h3 className="dark-color">Email</h3>
                                    <div className="media">
                                        {/* <label className=''>Email:&nbsp;</label> */}
                                        <p>{ email }</p>
                                        &nbsp;
                                        <button onClick={updateEmail}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br/> 
               
                       
                    
                
                </div>
                <button className='w-25 text-center' onClick={signout}>Log out</button>
                <div className="counter">
                    <div className="row mt-4">
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="500" data-speed="500">500</h6>
                                <p className="m-0px font-w-600">Quizzes Completed</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="150" data-speed="150">0/4</h6>
                                <p className="m-0px font-w-600">Paths Encountered</p>
                            </div>
                        </div>
                        {/* <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="850" data-speed="850">850</h6>
                                <p className="m-0px font-w-600">Photo Capture</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="190" data-speed="190">190</h6>
                                <p className="m-0px font-w-600">Telephonic Talk</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            
        </section>
         
       
    </div>
            
    )
}

export default Profile
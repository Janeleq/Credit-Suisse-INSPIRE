// import React from 'react'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBarLogin.tsx'
import Logo from '../assets/PerceptionPause_logo.png'
import { getAuth, updateEmail, signOut } from "firebase/auth";


function Profile() {
    const auth = getAuth();
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

    
    useEffect(() => {
        function signout (){
            signOut(auth).then(() => {
                // Sign-out successful.
                alert("Sign out sucessful!")
              }).catch((error) => {
                // An error happened.
              });
        }
    })


    return (
        <div className='container-fluid'>
            <Navbar></Navbar>           
            <section className="section about-section gray-bg" id="about" style={{marginTop: '10%'}}>
                <div className="row align-items-center ">
                <div className="col-lg-4">
                        <div className="about-avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">About Me</h3>
                            <h6 className="theme-color lead">A Lead UX &amp; UI designer based in </h6>
                            <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>Name</label>
                                        <p>{ name }</p>
                                    </div>
                                    <div className="media">
                                        <label className=''>Email</label>
                                        <p>{ email }</p>
                                        <button onClick={updateEmail}>Update</button>
                                    </div>
                                    <div className="media">
                                        <label>Address</label>
                                        <p>California, USA</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>-</label>
                                        <p>-</p>
                                    </div>
                                    <div className="media">
                                        <label>-</label>
                                        <p>-</p>
                                    </div>
                                    <div className="media">
                                        <label>Skype</label>
                                        <p>skype.0404</p>
                                    </div>
                                    <div className="media">
                                        <label>Freelance</label>
                                        <p>Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <button className='w-100 text-center' onClick={signOut}>Log out</button>
                    </div>
                    
                
                </div>
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
                        <div className="col-6 col-lg-3">
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
                        </div>
                    </div>
                </div>
            
        </section>
         
       
    </div>
            
    )
}

export default Profile
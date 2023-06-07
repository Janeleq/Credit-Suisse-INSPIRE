// import React from 'react'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBarLogin.tsx'
import Logo from '../assets/PerceptionPause_logo.png'
import { getAuth, updateEmail, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
// import '../styles/_quiz.css'

function Quiz() {
    const auth = getAuth();
    const navigate = useNavigate();
    const user = auth.currentUser;
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    
    const questions = [
        {
            question: "What is unconscious bias?",
            answers: [
                { text: "UWU", correct: false},
                { text: "UWU", correct: true},
                { text: "UWU", correct: false},
                { text: "UWU", correct: false}
            ]
        },
        {
            question: "Does unconscious bias affect everybody?",
            answers: [
                { text: "Yes it does.", correct: true},
                { text: "No, I'm pretty sure it does not", correct: false},
                { text: "NO!", correct: false},
            ]
        }
    ];
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    
    

    console.log(user)

    // updateEmail(auth.currentUser, email).then(() => {
    // // Email updated!
    // // ...
    // }).catch((error) => {
    // // An error occurred
    // // ...
    //     const errorMessage = error.message;
    //     setError(errorMessage)
    // });

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


    // useEffect(() => {
    //     if (user !== null) {
    //         user.providerData.forEach((profile) => {
    //           console.log("Sign-in provider: " + profile.providerId);
    //           console.log("  Provider-specific UID: " + profile.uid);
    //           console.log("  Name: " + profile.displayName);
    //           setName(profile.displayName)
    //           console.log("  Email: " + profile.email);
    //           setEmail(profile.email)
    //           console.log("  Photo URL: " + profile.photoURL);
    //           setPhoto(profile.photoURL)
    //         });
    //       }
    // })

    
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
        <div className='container-fluid p-0'>
            <Navbar></Navbar>           
            <section className="quiz" id="about" style={{marginTop: '18vh'}}>
                <h1>Unconscious Bias Quiz</h1>
                <h2 id="question">Question</h2>
                <div id="answer-buttons">
                    <button className="m-2 btn bg-secondary">Ans 1</button><br/>
                    <button className="m-2 btn bg-secondary">Ans 2</button><br/>
                    <button className="m-2 btn bg-secondary">Ans 3</button><br/>
                    <button className="m-2 btn bg-secondary">Ans 4</button>
                </div>
                <button className="m-2" id="next-btn">Next</button>
            </section>
         
       
    </div>
            
    )
    }   


export default Quiz
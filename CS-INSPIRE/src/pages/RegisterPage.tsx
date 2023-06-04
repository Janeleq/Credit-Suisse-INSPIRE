import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase/firebase.js';
import logo from '../assets/PerceptionPause_newlogo.png'
import Footer from '../components/Footer.tsx'
import background from '../assets/background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SignupPage = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('')
 
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

    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login", {state:{name:username}})
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            setError(errorMessage)

            // ..
        });
 
   
    }


  return (
    <div style={{
        overflow: 'hidden'
    }} className="container-fluid bg-light">   
        <div className='mb-2 p-0'> 
        <div className='row p-0' style={{height: '10%'}}>
            <img src={logo} style={{width: '8%'}}/>
        </div> 
        <div className="row mt-5">
            <div className='m-2 col text-center'>
                <p className='text-center display-6 font-weight-light p-3'>You're one click away from discovering your potentially hidden side</p>
                <img src={background} className='img-fluid'/>
            </div>
           
            <div className='col'>
                <div className='text-center' style={{}}>                  
                    {/* <h1> Perception Pause </h1>    */}
                                                                                            
                    <form className='p-3 text-center bg-light' style={{backgroundColor: 'grey'}}>
                        <div className="row">
                            <div className='col p-0'>
                
                            </div> 
                        </div> 
                        <br/>
                        <div className='row' style={{fontSize:"28px"}}>
                            
                            <div className='col p-0'>
                            <strong>Register</strong>  
                            </div>
                        </div>          
                        <br/>                                                                                 
                        <div className="row">
                            
                            <label htmlFor="email-address"  className='lead'>
                                Email address
                            </label>
                        
                        <div className='col text-center' style={{}}>
                                <input
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}  
                                    required                                    
                                    placeholder="" 
                                    style={{height: ''}}   
                                    className='w-50 p-0 text-center lead small'                                
                                />
                        </div>
                        </div>
        
                        <br/>
                        {/* <div className='row'> */}
                        <label htmlFor='gender' className='lead'>
                            Gender
                        </label>
                        <br/>

                            
                            <FontAwesomeIcon icon={['fa', 'female']} />

                            <input type="radio" id="female" name="gender" value="female"/>
                            <label for="female" style={{display: 'inline'}}>&nbsp;&nbsp;Female</label> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <input type="radio" id="male" name="gender" value="male"/>
                            <label for="male">&nbsp;&nbsp;Male</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <input type="radio" id="unknown" name="gender" value="unknown"/>
                            <label for="unknown">&nbsp;&nbsp;Prefer not to disclose</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* </div> */}
                        <div className='row'>
                            <label htmlFor="username" className='lead'>
                                Username
                            </label>
                            <div className='col'>
                                <input
                                    type="email"
                                    label="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}  
                                    required                                    
                                    placeholder="" 
                                    style={{height: ''}}  
                                    className='w-50 p-0 text-center lead small'                             
                                />
                            </div> 
                        </div>
                        <br/>
                        <div className='row'>
                            <label htmlFor="password"  className='lead'>
                                Password
                            </label>
                        <div className='col'>
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required                                 
                                    placeholder="" 
                                    style={{height: ''}}  
                                    className='w-50 p-0 text-center lead small'               
                                />
                            </div>
                        </div>                                             
                        
                        <br/><br/>
                            <button
                                type="submit" 
                                onClick={onSubmit}   
                                className=''
                                style={{width: '200px', height:'auto', alignSelf:'center'}}   
                            >  
                                Sign up                                
                            </button>
                        <br/><br/>
                    <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                    </p>  
                    <p style={{color:"red"}}>{error}</p>     
                    </form>  
                             
                </div>
            </div>
        </div>
        </div>
        <Footer></Footer>   
    </div>
  )
}
 
export default SignupPage;
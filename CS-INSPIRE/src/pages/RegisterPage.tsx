import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase/firebase.js';
import logo from '../assets/PerceptionPause_newlogo.png'



const SignupPage = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('')
 
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
    <div className="container-fluid bg-light" style={{width: ''}}>        
        <div className="row">
            <div className='col'>
                <div className='text-center' style={{}}>                  
                    {/* <h1> Perception Pause </h1>    */}
                                                                                            
                    <form className='card shadow p-5 text-center bg-light' style={{backgroundColor: 'grey'}}>
                        <div className="row">
                            <div className='col'>
                            <img src={logo} className='w-75 m-0' style={{ alignSelf:'center'}}/>
                            </div> 
                        </div> 
                        <br/>
                        <div className='row' style={{fontSize:"28px"}}>
                            <div className="col">
                               <a href="/login">Login</a>
                            </div>
                            <div className='col'>
                            | 
                            </div>
                            <div className='col'>
                            <strong>Register</strong>  
                            </div>
                        </div>          
                        <br/>                                                                                 
                        <div className="row">
                            <label htmlFor="email-address"  className='lead'>
                                Email address
                            </label>
                        </div>
                        <div className='row'>
                                <input
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}  
                                    required                                    
                                    placeholder="" 
                                    style={{height: '5%'}}   
                                    className='text-center lead small'                                
                                />
                        </div>
                    
                        <br/>
                        <div className='row'>
                            <label htmlFor="username" className='lead'>
                                Username
                            </label>
                            <input
                                type="email"
                                label="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}  
                                required                                    
                                placeholder="" 
                                style={{height: '5%'}}  
                                className='text-center lead small'                             
                            />
                        </div>
                        <br/>
                        <div className='row'>
                            <label htmlFor="password"  className='lead'>
                                Password
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="" 
                                style={{height: '5%'}}  
                                className='text-center lead small'               
                            />
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

                   <br/>
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
  )
}
 
export default SignupPage;
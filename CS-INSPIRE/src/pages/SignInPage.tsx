import { useState, useEffect } from 'react';
import {  sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup  } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase.js';
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/PerceptionPause_newlogo.png'
import Footer from '../components/Footer.tsx';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    
    // const location = useLocation();

    // const [name, setName] = useState('');

    // if (location.state.name != null) {
    //     setName(location.state.name)
    // }

    const onLogin = async (e) => {
        console.log("Login clicked")
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home", {state:{email: email}})
            
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            setError(errorMessage)
        });
       
    }

    const signInWithGoogle = async () => {
        try {
        await signInWithPopup(auth,googleProvider);
            // const user = userCredential.user;
            navigate("/home", {state:{email: email}})
            // console.log(user);  
        } catch (err){
          console.error(err);
          
        }
      };

    const resetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            
                // Password reset email sent!
                // ..
                if (confirm("Go to reset your password?"))
                {
                    alert("Password reset email sent. Check your email!")
                    
                }
               
        }
        catch(error)  {
            const errorMessage = error.message;
            console.log(errorMessage)
            setError(`Error in password reset ${errorMessage}`)
            // ..
        }
        
    }
    
    const [isLoading, setLoading] = useState(true);
  
  
    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
      return new Promise(resolve => setTimeout(() => resolve(), 1000));
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
 
    return(
        <div data-aos=""  className='bg-light' style={{overflow: 'hidden', backgroundColor: ''}}>    
            <div className='mb-2 text-center' style={{}}>          
                    {/* <h1> Perception Pause </h1>    */}
                    <div className="row m-2" style={{height: '10%'}}>
                        {/* <div className='col' style={{ alignSelf:'start'}} > */}
                        <NavLink to="/" style={{textAlign: 'left'}}>
                            <img src={logo} style={{width: '8%'}} className=''/>
                        </NavLink>
                        {/* </div> */}
                        
                    </div>      
                    
                     <div className='desc text-center'>
                        <h3>Welcome to Perception Pause</h3>
                         <text className='lead'>To get started, please sign in</text>         
                     </div>
                     
                     <br/>
              


                    <div className='row text-center' style={{fontSize:"28px"}}>
                            <div className="col p-0"></div>
                            <div className='col p-0'>
                                <div className='row form'>
                                    <div className='col p-0'>
                                        <strong>Login</strong>
                                    </div> 
                                </div>
                            </div>
                            <div className='col p-0'></div>
                    </div>          
                        <br/><br/>
                        <div className='row'>
                            <div className='col text-center'>
                                <button className="btn btn-outline-dark" style={{textTransform:"none"}} onClick={signInWithGoogle}>
                                    <img width="20px" style={{marginBottom:'3px', marginRight: '5px'}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" /> Continue with Google
                                </button>      
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col text-right'>
                                <hr></hr>
                            </div>
                            <div className='col lead w-25 text-center'>
                                <small className=''>OR</small> 
                            </div>
                            <div className='col text-left'>
                                <hr></hr>
                            </div>
                        </div>
                        <br/>
                        <div className="row text-center">
                            <label htmlFor="email-address"  className='lead p-0 mb-1'>
                                Email address
                            </label>
                        </div>
                        <div className='row' style={{}}>
                            <div className='col p-0 text-center'>
                                <input
                                        type="email"
                                        // label="Email address"
                                        value={email}
                                        
                                        onChange={(e) => setEmail(e.target.value)}  
                                        required                                    
                                        placeholder=""    
                                        className='text-dark shadow bg-light p-0 text-center lead small w-25'                                
                                    />
                            </div>
                        </div>
                    
                        <br/>
                        <div className='row text-center'>
                            <label htmlFor="password"  className='lead p-0 mb-1'>
                                Password
                            </label>
                            <div className='col p-0'>
                                <input
                                    type="password"
                                    // label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required                                 
                                    placeholder="" 
                                    className='text-dark shadow bg-light p-0 text-center lead small w-25'               
                                    style={{
                                    
                                    }}
                                />
                            </div>
                        </div>                                             
                        
                        <div className='row text-center'>
                            <div className='col' onClick={resetPassword}>
                                Forgot password?
                            </div>
                        </div>
                        <br/><br/>
                        <div className='row text-center'>
                                <div className='col p-0'>
                                    <button
                                    type="submit" 
                                    onClick={onLogin}
                                    className='w-25'
                                    style={{width: '200px', height:'auto', alignSelf:'center'}}   
                                >  
                                    Log In                            
                                </button>
                            </div>
                        </div>
                    <br/>

                   <p className="text-sm text-center">
                            No account yet? {' '}
                            <NavLink to="/register">
                                Sign up
                            </NavLink>
                        </p>
                    <p className="text-center" style={{color:"red"}}>{error}</p>
                    {/* <p className="text-center" style={{color:"green"}}>{success}</p>           */}
                </div>  
            <Footer></Footer>   
        </div>
    
    )
}




export default LoginPage;
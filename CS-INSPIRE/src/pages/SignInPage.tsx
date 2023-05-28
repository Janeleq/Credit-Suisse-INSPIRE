import {useState} from 'react';
import {  signInWithEmailAndPassword, signInWithPopup  } from 'firebase/auth';
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
            console.log(user);  
        } catch (err){
          console.error(err);
        }
      };
 
    return(
        <div className='' style={{overflow: 'hidden'}}>    
            <div className='mb-2' style={{}}>          
                    {/* <h1> Perception Pause </h1>    */}
                    <div className="row m-2" style={{height: '10%'}}>
                        {/* <div className='col' style={{ alignSelf:'start'}} > */}
                            <img src={logo} style={{width: '10%'}}/>
                        {/* </div> */}
                        
                    </div>      
                    
                     <div className='desc text-center'>
                        <h3>Welcome to Perception Pause</h3>
                         <text className='lead'>To get started, please sign in</text>         
                     </div>
                     
                     <br/>
              
                     <button className="btn btn-outline-dark" style={{textTransform:"none"}} onClick={signInWithGoogle}>
                        <img width="20px" style={{marginBottom:'3px', marginRight: '5px'}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                     </button>      

                    <div className='row text-center' style={{fontSize:"28px"}}>
                            <div className="col p-0"></div>
                            <div className='col p-0'>
                                <div className='row form'>
                                    <div className='col p-0'>
                                        <strong>Login</strong>  | <a href="/register">Register</a> 
                                    </div> 
                                </div>
                            </div>
                            <div className='col p-0'></div>
                    </div>          
                        <br/> 
                        <div className="row text-center">
                            <label htmlFor="email-address"  className='lead p-0'>
                                Email address
                            </label>
                        </div>
                        <div className='row text-center'>
                            <div className='col p-0'>
                                <input
                                        type="email"
                                        // label="Email address"
                                        value={email}
                                        
                                        onChange={(e) => setEmail(e.target.value)}  
                                        required                                    
                                        placeholder=""    
                                        className='p-0 text-center lead small w-50'                                
                                    />
                            </div>
                        </div>
                    
                        <br/>
                        <div className='row text-center'>
                            <label htmlFor="password"  className='lead p-0'>
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
                                    className='p-0 text-center lead small w-50'               
                                />
                            </div>
                        </div>                                             
                        
                        <br/><br/>
                        <div className='row text-center'>
                                <div className='col p-0'>
                                    <button
                                    type="submit" 
                                    onClick={onLogin}
                                    className=''
                                    style={{width: '200px', height:'auto', alignSelf:'center'}}   
                                >  
                                    Sign In                            
                                </button>
                            </div>
                        </div>

                    <div className="g-signin2" data-width="300" data-height="200" data-longtitle="true"></div>

                   <br/>
                   <p className="text-sm text-center">
                            No account yet? {' '}
                            <NavLink to="/register">
                                Sign up
                            </NavLink>
                        </p>
                    <p className="text-center" style={{color:"red"}}>{error}</p>     
                </div>  
            <Footer></Footer>   
        </div>
    )
}
 
export default LoginPage;
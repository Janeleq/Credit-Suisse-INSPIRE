import {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase/firebase.js';
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
 
    return(
        <main className='m-0' style={{alignSelf: 'center'}}>                
                    {/* <h1> Perception Pause </h1>    */}
                                                                                            
                    <form className='m-0 card shadow p-5 text-center' style={{alignSelf:'center'}}>                                                                                            
                    <div className="row">
                        <div className='col'>
                            <img src={logo} className='w-75 m-0' style={{ alignSelf:'center'}}/>
                        </div>
                        
                    </div>
                    
                    <br/>
                    <div className='row' style={{fontSize:"28px"}}>
                            <div className="col">
                                <strong>Login</strong>  
                            </div>
                            <div className='col'>
                            | 
                            </div>
                            <div className='col'>
                            <a href="/register">Register</a> 
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
                                    // label="Email address"
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
                            <label htmlFor="password"  className='lead'>
                                Password
                            </label>
                            <input
                                type="password"
                                // label="Create password"
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
                                onClick={onLogin}
                                className=''
                                style={{width: '200px', height:'auto', alignSelf:'center'}}   
                            >  
                                Sign In                            
                            </button>

                   <br/>
                   <p className="text-sm text-center">
                            No account yet? {' '}
                            <NavLink to="/register">
                                Sign up
                            </NavLink>
                        </p>
                    <p style={{color:"red"}}>{error}</p>     
                </form>     
            <Footer></Footer>   
        </main>
    )
}
 
export default LoginPage;
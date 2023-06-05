import {useEffect, useState} from 'react';
import { signOut } from "firebase/auth";
import {auth} from '../firebase/firebase.js';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import NavigationBarLogin from '../components/NavBarLogin.tsx';
import Chatbot from '../components/Chatbot.tsx'

export const HomePageLogin = () => {
    console.log("rendering lifecycle")
    const navigate = useNavigate();
 
    const location = useLocation();
    const [email, setEmail] = useState('');

    useEffect (() => {
        if (location.state != null) {
            setEmail(location.state.email)
        }
        someRequest().then(() => {
            const loaderElement = document.querySelector(".loader-container");
            if (loaderElement) {
              loaderElement.remove();
              setLoading(!isLoading);
            }
          });
    }, [])

    const [isLoading, setLoading] = useState(true);
  
  
    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
      return new Promise(resolve => setTimeout(() => resolve(), 1500));
    } 

    const handleLogout = () => {    
        console.log("function handlelogout called")           
        signOut(auth).then(() => {
        // Sign-out successful.
        if (confirm("Are you sure you want to sign out?") == true) {
                navigate("/login");
                alert("Signed out successfully!")
            }
        }).catch((error) => {
        // An error happened.
            alert("ERROR! Something went wrong when signing out.")
        });
    }
   
    return(
        <div className='container-fluid'>
           <NavigationBarLogin/>
           <Chatbot/>
           <div className='content' style={{marginTop: '18vh'}}>
                <p>
                    Welcome Home {email}
                </p>
 
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
           </div>
               
        </div>
    )
}
 
export default HomePageLogin;
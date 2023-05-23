import React from 'react';
import {  signOut } from "firebase/auth";
import {auth} from '../firebase/firebase.js';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
 
const HomePage = () => {
    const navigate = useNavigate();
 
    const location = useLocation();

    // const [name, setName] = useState('');

    
    

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/login");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
            console.log("error in signing out.")
        });
    }
   
    return(
        <>
            <nav>
                <p>
                    Welcome Home {location.state.email}
                </p>
 
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
            </nav>
        </>
    )
}
 
export default HomePage;
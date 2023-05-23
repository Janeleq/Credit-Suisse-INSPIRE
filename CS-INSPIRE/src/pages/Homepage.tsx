import React from 'react';
import {  signOut } from "firebase/auth";
import {auth} from '../firebase/firebase.js';
import { useNavigate } from 'react-router-dom';
 
const HomePage = () => {
    const navigate = useNavigate();
 
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
                    Welcome Home {username}
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
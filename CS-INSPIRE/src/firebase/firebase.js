// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { getFirestore, addDoc, collection} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfy2v7pFukhGMjVddjsIT4QvrG_bNHghw",
  authDomain: "perception-pause.firebaseapp.com",
  projectId: "perception-pause",
  storageBucket: "perception-pause.appspot.com",
  messagingSenderId: "20823814947",
  appId: "1:20823814947:web:b57f0cbac6ae570ade9296",
  measurementId: "G-CBH6066GBD"
};

// const db = getFirestore();



const signUp = async (email, password) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          email: user.email,
        });
        return true
      } catch (error) {
        return {error: error.message}
      }
    };
    
    const signIn = async (email, password) => {
          try {
            const userCredential = await signInWithEmailAndPassword(
              auth,
              email,
              password
            );
            const user = userCredential.user;
            return true
          } catch (error) {
            return {error: error.message}
          }
        };

    const signOut = async() => {
          try {
            await signOut(auth)
            return true
          } catch (error) {
            return false
          }
        };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 
export default app;
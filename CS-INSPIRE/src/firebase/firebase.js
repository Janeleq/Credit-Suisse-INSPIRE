// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAfy2v7pFukhGMjVddjsIT4QvrG_bNHghw",
  authDomain: "perception-pause.firebaseapp.com",
  projectId: "perception-pause",
  storageBucket: "perception-pause.appspot.com",
  messagingSenderId: "20823814947",
  appId: "1:20823814947:web:b57f0cbac6ae570ade9296",
  measurementId: "G-CBH6066GBD"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

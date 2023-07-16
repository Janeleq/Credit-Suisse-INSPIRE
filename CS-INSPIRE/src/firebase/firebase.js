// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "perception-pause.firebaseapp.com",
  databaseURL: "https://perception-pause-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "perception-pause",
  storageBucket: "perception-pause.appspot.com",
  messagingSenderId: "20823814947",
  appId: "1:20823814947:web:b57f0cbac6ae570ade9296",
  measurementId: "G-CBH6066GBD"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app)
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

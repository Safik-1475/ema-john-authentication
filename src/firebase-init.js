// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvA__L3kZGh1LVapkb9dcrThjFjrUZmMc",
    authDomain: "ema-john-authentication-56123.firebaseapp.com",
    projectId: "ema-john-authentication-56123",
    storageBucket: "ema-john-authentication-56123.appspot.com",
    messagingSenderId: "612208907209",
    appId: "1:612208907209:web:7c916252a36198eba10e18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
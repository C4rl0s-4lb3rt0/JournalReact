// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr6bPREGlS6_kDFJtKlrefK0Cfg9N1g3Y",
  authDomain: "react-cursos-f86de.firebaseapp.com",
  projectId: "react-cursos-f86de",
  storageBucket: "react-cursos-f86de.appspot.com",
  messagingSenderId: "127638397597",
  appId: "1:127638397597:web:5075b02abc1672469b2a74"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)

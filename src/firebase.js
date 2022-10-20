// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'medicalapp-1b305.firebaseapp.com',
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: 'medicalapp-1b305.appspot.com',
  messagingSenderId: '429038903479',
  appId: process.env.REACT_APP_API_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

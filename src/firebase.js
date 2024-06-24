// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl_nVe1AcrPiZ9tuWbBg1RzZwI7cZvVLE",
  authDomain: "random-57838.firebaseapp.com",
  projectId: "random-57838",
  storageBucket: "random-57838.appspot.com",
  messagingSenderId: "887940215501",
  appId: "1:887940215501:web:e6dab5643f126f8af32f84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
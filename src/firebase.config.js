// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0XHEmmc3-vTWYf_nW2miAyBu2H0j15ck",
  authDomain: "otp-project-react-7f340.firebaseapp.com",
  projectId: "otp-project-react-7f340",
  storageBucket: "otp-project-react-7f340.appspot.com",
  messagingSenderId: "293835706982",
  appId: "1:293835706982:web:4d5d105e1c2e276f10d3a7",
  measurementId: "G-1BP9S4PBJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCus8Enr6Icv3NrMXC0K2WjbGLAVcQRun8",
  authDomain: "netflixgpt-8ded7.firebaseapp.com",
  projectId: "netflixgpt-8ded7",
  storageBucket: "netflixgpt-8ded7.appspot.com",
  messagingSenderId: "95987219901",
  appId: "1:95987219901:web:9208c6372832b5e101a6d4",
  measurementId: "G-LXY02T3SKX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

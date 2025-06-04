// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi8uECsVTlrqNozWmBsOcQ_ROmHWtiNAc",
  authDomain: "pollitago-366a0.firebaseapp.com",
  projectId: "pollitago-366a0",
  storageBucket: "pollitago-366a0.firebasestorage.app",
  messagingSenderId: "35394160409",
  appId: "1:35394160409:web:aa18564cc9f81b58796788",
  measurementId: "G-PNKFSJPBCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
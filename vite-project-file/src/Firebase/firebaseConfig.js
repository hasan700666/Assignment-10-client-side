// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg7stGf3AhEDuEMTKW5f_0ntY6yVdcjqI",
  authDomain: "food-lover-7eb8f.firebaseapp.com",
  projectId: "food-lover-7eb8f",
  storageBucket: "food-lover-7eb8f.firebasestorage.app",
  messagingSenderId: "958557449773",
  appId: "1:958557449773:web:44e7b8311c7eb5c60ad2a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
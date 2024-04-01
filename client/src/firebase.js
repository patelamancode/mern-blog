// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7d641.firebaseapp.com",
  projectId: "mern-blog-7d641",
  storageBucket: "mern-blog-7d641.appspot.com",
  messagingSenderId: "187388202994",
  appId: "1:187388202994:web:55815d2417d5cfff9ae56b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

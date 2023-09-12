// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDffNzRIF9xGt1f8F8yfogXXN39H1c2XwQ",
  authDomain: "food-app-515ae.firebaseapp.com",
  projectId: "food-app-515ae",
  storageBucket: "food-app-515ae.appspot.com",
  messagingSenderId: "939432405622",
  appId: "1:939432405622:web:8bd7c5d2ffbf9e2aef0d57",
  measurementId: "G-6R8TGJPL7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
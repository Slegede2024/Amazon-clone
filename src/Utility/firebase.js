import firebase  from "firebase/compat/app";

import { getAuth } from "firebase/auth";
import  "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY9O5oyUzEqrotZMXBLQqnCSPDQClHjE8",
  authDomain: "clone-ef248.firebaseapp.com",
  projectId: "clone-ef248",
  storageBucket: "clone-ef248.firebasestorage.app",
  messagingSenderId: "449369468724",
  appId: "1:449369468724:web:4e0fdccda4d0162b927f61",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

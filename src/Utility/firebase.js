import firebase  from "firebase/compat/app";

import { getAuth } from "firebase/auth";
import  "firebase/compat/firestore";
import "firebase/compat/auth";


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

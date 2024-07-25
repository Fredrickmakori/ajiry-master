//import { useState } from "react";
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
//mport { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaLhPqKpcmkCMkJD3wi7btgaOu6MGHu8Q",
  authDomain: "ajiry-master.firebaseapp.com",
  projectId: "ajiry-master",
  storageBucket: "ajiry-master.appspot.com",
  messagingSenderId: "422291681379",
  appId: "1:422291681379:web:0a83fb8d6415f0ad838856",
  measurementId: "G-5PJCSSEVJ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
//const db = getFirestore(app);

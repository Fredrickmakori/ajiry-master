// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase-admin/firestore";
//import auth from "firebase-admin/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(app);

export { auth, storage, db };

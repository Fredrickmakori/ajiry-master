import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBaLhPqKpcmkCMkJD3wi7btgaOu6MGHu8Q",
  authDomain: "ajiry-master.firebaseapp.com",
  projectId: "ajiry-master",
  storageBucket: "ajiry-master.appspot.com",
  messagingSenderId: "422291681379",
  appId: "1:422291681379:web:0a83fb8d6415f0ad838856",
  measurementId: "G-5PJCSSEVJ9",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

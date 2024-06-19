import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBaLhPqKpcmkCMkJD3wi7btgaOu6MGHu8Q",
  authDomain: "ajiry-master.firebaseapp.com",
  projectId: "ajiry-master",
  storageBucket: "ajiry-master.appspot.com",
  messagingSenderId: "422291681379",
  appId: "1:422291681379:web:0a83fb8d6415f0ad838856",
  measurementId: "G-5PJCSSEVJ9",
};
initializeApp(firebaseConfig);
//init firebase
initializeApp(firebaseConfig);
//init services
const db = getFirestore();

//collection re
const colRef = collection(db, "books");

//get collection data
getDocs(colRef).then((snapshot) => {
  let books = [];
  snapshot.docs
    .forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
      console.log(books);
    })
    .catch((err) => {
      console.log(err.message);
    });
});
//adding documents
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
//deleting documents
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
//firebase authentication
const auth = getAuth();
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
//signUp
function signUp() {
  var email = emailInput.value;
  var password = passwordInput.value;
  firebaseui
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode, errorMessage);
    });
}
//SIGNIN
function signIn() {
  var email = emailInput.value;
  var password = passwordInput.value;
  firebaseui
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode, errorMessage);
    });
}
function signOut() {
  firebaseui
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
      console.log("signed out");
    })
    .catch(function (error) {
      // An error happened.
      console.log(error.value);
    });
}
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    document.getElementById("email").innerHTML = user.email;
    document.getElementById("sign-out").style.display = "block";
    document.getElementById("sigm-in").style.display = "none";
    document.getElementById("sign-up").style.display = "none";
  } else {
    // User is signed out.
    console.log({ email }, +"signed out");
    document.getElementById("email").innerHTML = "";
    document.getElementById("sign-out").style.display = "none";
    document.getElementById("sigm-in").style.display = "block";
    document.getElementById("sign-up").style.display = "block";
    // ...
  }
});

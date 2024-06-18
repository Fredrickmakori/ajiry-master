import { initializeApp } from "firebase/app";
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

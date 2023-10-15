// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "firebase/auth";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEUhVRl1T4QATfO--07jxgYVOZPyM-Vf4",
  authDomain: "mynativebase79.firebaseapp.com",
  projectId: "mynativebase79",
  storageBucket: "mynativebase79.appspot.com",
  messagingSenderId: "909154790196",
  appId: "1:909154790196:web:ff6a8af2f0e027cce9d361",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export default firebase.initializeApp(firebaseConfig);

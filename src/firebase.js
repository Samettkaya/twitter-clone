import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA7jmB5qt06uY43XU7rNcpZnno8bGkDCjo",
  authDomain: "twitter-clone-d34fb.firebaseapp.com",
  projectId: "twitter-clone-d34fb",
  storageBucket: "twitter-clone-d34fb.appspot.com",
  messagingSenderId: "122351146606",
  appId: "1:122351146606:web:820cd408055e5045dc387f",
  measurementId: "G-53J7YB94XN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;

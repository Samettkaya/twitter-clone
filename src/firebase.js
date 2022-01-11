import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD4J-wItJNCf5n2l5QPnpsB0dCgZP7uiZM",
  authDomain: "twitter-clone-1308a.firebaseapp.com",
  projectId: "twitter-clone-1308a",
  storageBucket: "twitter-clone-1308a.appspot.com",
  messagingSenderId: "608529888304",
  appId: "1:608529888304:web:5f0c54b71c2aa8208b29f5",
  measurementId: "G-C5Y11G0GZP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;
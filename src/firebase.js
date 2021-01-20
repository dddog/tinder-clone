import firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsE6RJu6DZN7NssVrlfszs-RtNgjuZqhY",
  authDomain: "tinder-clone-98a38.firebaseapp.com",
  projectId: "tinder-clone-98a38",
  storageBucket: "tinder-clone-98a38.appspot.com",
  messagingSenderId: "503231388690",
  appId: "1:503231388690:web:6fad595494283fa87a8ccb",
  measurementId: "G-2VGD43XWB3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;

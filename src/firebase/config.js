import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAYSB6aIbjh3IB50pEDBlOa6HmaFqkQ8SY",
  authDomain: "sanchan-s-gallery-c5f73.firebaseapp.com",
  projectId: "sanchan-s-gallery-c5f73",
  storageBucket: "sanchan-s-gallery-c5f73.appspot.com",
  messagingSenderId: "68597776367",
  appId: "1:68597776367:web:7e0fab074d2e893721401a",
  measurementId: "G-023XGPN08N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

 
export { projectStorage, projectFirestore, timestamp };

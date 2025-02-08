// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwedqV81oCaNXvIZWy0S3qOnIFRrbTuE0",
  authDomain: "pulseclip-19343.firebaseapp.com",
  projectId: "pulseclip-19343",
  storageBucket: "pulseclip-19343.appspot.com",
  messagingSenderId: "521000601256",
  appId: "1:521000601256:web:0cf4159290da20ba9c649d",
  measurementId: "G-0VCJ3Q78QB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

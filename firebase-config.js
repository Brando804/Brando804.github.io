import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, setDoc, getDoc, onSnapshot, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDLqZi7c209nH-RSXqAh_vjRwRqKR1y6Y0",
  authDomain: "uniferro-fb605.firebaseapp.com",
  projectId: "uniferro-fb605",
  storageBucket: "uniferro-fb605.firebasestorage.app",
  messagingSenderId: "545268100079",
  appId: "1:545268100079:web:1a37d501f89743e5bf241a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, setDoc, getDoc, onSnapshot, updateDoc, doc, signInWithEmailAndPassword, signOut, onAuthStateChanged };

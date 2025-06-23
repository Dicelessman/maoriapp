// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD2q76D357xcvi1F2ifMt1qAnqJyQv1tpA",
  authDomain: "myreparto-6fa59.firebaseapp.com",
  projectId: "myreparto-6fa59",
  storageBucket: "myreparto-6fa59.firebasestorage.app",
  messagingSenderId: "366632707549",
  appId: "1:366632707549:web:1e103de89a17cc62178234"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
// Import functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// ----------------------------------------------------------------
// TODO: Add your web app's Firebase configuration
// ----------------------------------------------------------------
// ⬇️⬇️⬇️ PASTE YOUR CONFIG OBJECT HERE ⬇️⬇️⬇️
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD45ao_zQfI70cbSPzV92yqGiEPKUwxkys",
  authDomain: "fake-news-9086b.firebaseapp.com",
  databaseURL: "https://fake-news-9086b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fake-news-9086b",
  storageBucket: "fake-news-9086b.firebasestorage.app",
  messagingSenderId: "701698958951",
  appId: "1:701698958951:web:0f528e8cec2641e1eb56c2",
  measurementId: "G-723R81M1GM"
};
// ⬆️⬆️⬆️ PASTE YOUR CONFIG OBJECT HERE ⬆️⬆️⬆️
// ----------------------------------------------------------------

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services you'll need
export const auth = getAuth(app);
export const db = getFirestore(app);
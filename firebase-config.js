import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPnmsHlUSIxYkTTkzR7uMRCOG3fqRFssM",
  authDomain: "v-lazarus.firebaseapp.com",
  projectId: "v-lazarus",
  storageBucket: "v-lazarus.firebasestorage.app",
  messagingSenderId: "108621766756",
  appId: "1:108621766756:web:5a8dd256f7feda58f97f71",
  measurementId: "G-FB5N7FMWT5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

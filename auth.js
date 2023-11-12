import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyCGzTIZ_iqy_K0iN6ob3KNeDJ3UFepE7cY",
    authDomain: "authentication-2ac2f.firebaseapp.com",
    projectId: "authentication-2ac2f",
    storageBucket: "authentication-2ac2f.appspot.com",
    messagingSenderId: "925842598142",
    appId: "1:925842598142:web:52ce35fa265cbaac6d9daf",
    measurementId: "G-VGKF7NBH1T"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
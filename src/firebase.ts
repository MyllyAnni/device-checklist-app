import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfgVBsnaGEXObNUohUBxLLwcDKdDxsHDI",
  authDomain: "device-checklist-app.firebaseapp.com",
  projectId: "device-checklist-app",
  storageBucket: "device-checklist-app.firebasestorage.app",
  messagingSenderId: "149902648393",
  appId: "1:149902648393:web:cbaa74a49cdea72d6f0b98"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
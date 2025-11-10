// firestoreConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnATZvJEWuNit_NroQw4RypAGH6oiSfb0",
  authDomain: "kevins-project-57434.firebaseapp.com",
  projectId: "kevins-project-57434",
  storageBucket: "kevins-project-57434.firebasestorage.app",
  messagingSenderId: "515197855611",
  appId: "1:515197855611:web:42a9a7cf48ef9121587fde"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
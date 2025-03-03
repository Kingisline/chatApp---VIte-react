import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSX0PSdNyFgY8HzuPmkhZ8MigwA_hx5xk",
  authDomain: "chatapp-d0c18.firebaseapp.com",
  projectId: "chatapp-d0c18",
  storageBucket: "chatapp-d0c18.firebasestorage.app",
  messagingSenderId: "285749390797",
  appId: "1:285749390797:web:b7daf39892055ae0f16884",
  measurementId: "G-XHHPTWF7H7"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
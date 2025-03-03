import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-3c3e3.firebaseapp.com",
  projectId: "chatapp-3c3e3",
  storageBucket: "chatapp-3c3e3.firebasestorage.app",
  messagingSenderId: "904536231590",
  appId: "1:904536231590:web:0df84ea76cd22f03fdae67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()


// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://uoxzzxhkvhckzivtujiu.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVveHp6eGhrdmhja3ppdnR1aml1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5NTg0MDIsImV4cCI6MjA1NjUzNDQwMn0.UI10MDaOpK1Nj-dB0YrxEJ67GdhFcu09fxqCk4bOqVg';

// const app = createClient(supabaseUrl, supabaseKey);

// export const auth = supabase.auth;
// export const db = supabase.from; // Use this to access tables
// export const storage = supabase.storage;

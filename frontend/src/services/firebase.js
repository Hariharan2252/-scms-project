import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBt6PFyY-UNQzfnWGatlF0kpxV9vdWJpvE",
  authDomain: "scms-project-d6ca9.firebaseapp.com",
  projectId: "scms-project-d6ca9",
  storageBucket: "scms-project-d6ca9.appspot.com",
  messagingSenderId: "1007838973572",
  appId: "1:1007838973572:web:850d79dae1154de7a9bcd1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

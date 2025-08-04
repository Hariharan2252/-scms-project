// src/services/authService.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase"; // include db
import { doc, getDoc } from "firebase/firestore";

export const loginUser = async (email, password) => {
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  const uid = userCred.user.uid;

  // 🔍 fetch the role from Firestore
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const userData = docSnap.data();
    localStorage.setItem("role", userData.role); // store role for later
    return userData.role;
  } else {
    throw new Error("No user data found");
  }
};

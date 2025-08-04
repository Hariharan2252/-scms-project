// src/services/authService.js
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

export const loginUserWithRole = async (email, password, expectedRole) => {
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  const uid = userCred.user.uid;

  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const userData = docSnap.data();
    if (userData.role !== expectedRole) {
      await signOut(auth);
      throw new Error(`Access denied. This user is registered as '${userData.role}'.`);
    }

    localStorage.setItem("role", userData.role);
    return userData.role;
  } else {
    throw new Error("No user data found.");
  }
};

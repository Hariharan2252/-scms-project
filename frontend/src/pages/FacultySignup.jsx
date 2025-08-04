// src/pages/FacultySignup.jsx
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function FacultySignup() {
  const [formData, setFormData] = useState({
    name: "",
    facultyId: "",
    department: "",
    phone: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await setDoc(doc(db, "users", userCred.user.uid), {
        ...formData,
        role: "faculty",
      });
      navigate("/login/faculty");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSignup} className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Faculty Signup</h2>

      <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} className="w-full mb-3 p-2 border rounded" required />
      <input name="facultyId" placeholder="Faculty ID" onChange={handleChange} value={formData.facultyId} className="w-full mb-3 p-2 border rounded" required />
      <input name="department" placeholder="Department" onChange={handleChange} value={formData.department} className="w-full mb-3 p-2 border rounded" required />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} value={formData.phone} className="w-full mb-3 p-2 border rounded" required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} className="w-full mb-3 p-2 border rounded" required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password} className="w-full mb-3 p-2 border rounded" required />

      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Sign Up</button>
      {message && <p className="text-red-500 mt-2 text-center">{message}</p>}
    </form>
  );
}

export default FacultySignup;

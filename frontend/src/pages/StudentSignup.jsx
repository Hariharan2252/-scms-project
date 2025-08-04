import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function StudentSignup() {
  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    department: "",
    phone: "",
    whatsapp: "",
    officialEmail: "",
    personalEmail: "",
    dob: "",
    nativePlace: "",
    hostelStatus: "",
    leetcodeId: "",
    codechefId: "",
    password: "",
    confirmPassword: "",
    email: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return setMessage("Passwords do not match");
    }

    try {
      const userCred = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await setDoc(doc(db, "users", userCred.user.uid), {
        role: "student",
        ...form
      });
      navigate("/login/student");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Student Signup</h2>
      <form onSubmit={handleSignup} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { label: "Name", name: "name" },
          { label: "Father's Name", name: "fatherName" },
          { label: "Mother's Name", name: "motherName" },
          { label: "Department", name: "department" },
          { label: "Phone Number", name: "phone" },
          { label: "WhatsApp Number", name: "whatsapp" },
          { label: "Official Email", name: "officialEmail" },
          { label: "Personal Email", name: "personalEmail" },
          { label: "Date of Birth", name: "dob", type: "date" },
          { label: "Native Place", name: "nativePlace" },
          { label: "Hosteller / Day Scholar", name: "hostelStatus" },
          { label: "LeetCode ID", name: "leetcodeId" },
          { label: "CodeChef ID", name: "codechefId" },
          { label: "Login Email", name: "email", type: "email" },
          { label: "Password", name: "password", type: "password" },
          { label: "Confirm Password", name: "confirmPassword", type: "password" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            <input
              type={type}
              name={name}
              value={form[name]}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
        <div className="col-span-full text-center">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
            Sign Up
          </button>
          {message && <p className="text-red-500 mt-2">{message}</p>}
        </div>
      </form>
    </div>
  );
}

export default StudentSignup;

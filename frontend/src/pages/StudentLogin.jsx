// src/pages/StudentLogin.jsx
import { useState } from "react";
import { loginUserWithRole } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

function StudentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const role = await loginUserWithRole(email, password, "student");
      localStorage.setItem("auth", "true");
      navigate(`/dashboard/${role}`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Student Login</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 mb-4 border rounded" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 mb-4 border rounded" required />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup/student" className="text-blue-600 hover:underline">Sign up here</Link>
        </p>
      </form>
    </div>
  );
}

export default StudentLogin;

// src/pages/RoleSelect.jsx
import { useNavigate } from "react-router-dom";

function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Select Your Role</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-3" onClick={() => navigate("/login/student")}>
        Student
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded mb-3" onClick={() => navigate("/login/faculty")}>
        Faculty
      </button>
      <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={() => navigate("/login/parent")}>
        Parent
      </button>
    </div>
  );
}

export default RoleSelect;

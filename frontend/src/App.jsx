import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RoleSelect from "./pages/RoleSelect";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import ParentLogin from "./pages/ParentLogin";
import StudentSignup from "./pages/StudentSignup";
import FacultySignup from "./pages/FacultySignup";
import ParentSignup from "./pages/ParentSignup";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import ParentDashboard from "./pages/ParentDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/faculty" element={<FacultyLogin />} />
        <Route path="/login/parent" element={<ParentLogin />} />
        <Route path="/signup/student" element={<StudentSignup />} />
        <Route path="/signup/faculty" element={<FacultySignup />} />
        <Route path="/signup/parent" element={<ParentSignup />} />
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/dashboard/faculty" element={<FacultyDashboard />} />
        <Route path="/dashboard/parent" element={<ParentDashboard />} />

        {/* 🔁 Redirect generic /dashboard to role-based one */}
        <Route
          path="/dashboard"
          element={<Navigate to={`/dashboard/${localStorage.getItem("role") || "student"}`} replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;




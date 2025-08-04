import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";

function StudentDashboard() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setStudent(docSnap.data());
        }
      }
      setLoading(false);
    };

    fetchStudent();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading dashboard...</p>;

  if (!student) return <p className="text-center mt-10 text-red-600">No student data found.</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">👨‍🎓 Student Dashboard</h2>

      {/* ✅ Personal Details */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">📋 Personal Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Father's Name:</strong> {student.fatherName}</p>
          <p><strong>Mother's Name:</strong> {student.motherName}</p>
          <p><strong>Department:</strong> {student.department}</p>
          <p><strong>DOB:</strong> {student.dob}</p>
          <p><strong>Phone Number:</strong> {student.phone}</p>
          <p><strong>WhatsApp:</strong> {student.whatsapp}</p>
          <p><strong>Official Email:</strong> {student.officialEmail}</p>
          <p><strong>Personal Email:</strong> {student.personalEmail}</p>
          <p><strong>Native Place:</strong> {student.nativePlace}</p>
          <p><strong>Hostel/Day Scholar:</strong> {student.hostelStatus}</p>
          <p><strong>LeetCode ID:</strong> {student.leetcodeId}</p>
          <p><strong>CodeChef ID:</strong> {student.codechefId}</p>
        </div>
      </div>

      {/* ✅ Performance Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-white p-6 rounded shadow">
          <h4 className="text-md font-semibold text-gray-600 mb-2">🟩 Attendance</h4>
          <p className="text-3xl font-bold text-green-600">92%</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h4 className="text-md font-semibold text-gray-600 mb-2">📝 Internal Marks</h4>
          <ul className="text-sm">
            <li>Maths: 85</li>
            <li>DBMS: 90</li>
            <li>DSA: 88</li>
            <li>OOPS: 87</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h4 className="text-md font-semibold text-gray-600 mb-2">💻 LeetCode Stats</h4>
          <p className="text-sm">Problems Solved: 170</p>
          <p className="text-sm">Ranking: Top 10%</p>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;

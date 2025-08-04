import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

function FacultyDashboard() {
  const [students, setStudents] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [marks, setMarks] = useState({ maths: "", dbms: "", dsa: "", oops: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      const usersCol = collection(db, "users");
      const snapshot = await getDocs(usersCol);
      const list = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(user => user.role === "student");
      setStudents(list);
    };

    fetchStudents();
  }, []);

  const handleSelectStudent = (id) => {
    const student = students.find((s) => s.id === id);
    setSelectedId(id);
    setMarks(student.internalMarks || { maths: "", dbms: "", dsa: "", oops: "" });
    setMessage("");
  };

  const handleUpdate = async () => {
    try {
      const docRef = doc(db, "users", selectedId);
      await updateDoc(docRef, { internalMarks: marks });
      setMessage("✅ Marks updated successfully.");
    } catch (error) {
      setMessage("❌ Failed to update marks.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">👩‍🏫 Faculty Dashboard</h2>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Select Student</label>
        <select
          onChange={(e) => handleSelectStudent(e.target.value)}
          className="p-2 border rounded w-full md:w-1/2"
        >
          <option value="">-- Choose Student --</option>
          {students.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name} ({s.studentId})
            </option>
          ))}
        </select>
      </div>

      {selectedId && (
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Update Internal Marks</h3>
          {["maths", "dbms", "dsa", "oops"].map((subject) => (
            <div key={subject} className="mb-3">
              <label className="block font-medium capitalize">{subject}</label>
              <input
                type="number"
                value={marks[subject]}
                onChange={(e) => setMarks({ ...marks, [subject]: e.target.value })}
                className="p-2 border rounded w-full md:w-1/2"
              />
            </div>
          ))}

          <button
            onClick={handleUpdate}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Marks
          </button>

          {message && <p className="mt-3 text-green-600">{message}</p>}
        </div>
      )}
    </div>
  );
}

export default FacultyDashboard;

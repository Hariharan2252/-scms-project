import { useEffect, useState } from "react";
import { db, auth } from "../services/firebase";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function ParentDashboard() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChildData = async (parentUid) => {
      const parentRef = doc(db, "users", parentUid);
      const parentSnap = await getDoc(parentRef);
      const parentData = parentSnap.data();
      const linkedId = parentData?.studentLinkedId;

      const q = query(collection(db, "users"), where("studentId", "==", linkedId));
      const studentSnap = await getDocs(q);

      if (!studentSnap.empty) {
        setStudent(studentSnap.docs[0].data());
      }

      setLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchChildData(user.uid);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;

  if (!student) {
    return <div className="p-6 text-red-600">❌ No linked student data found.</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">👪 Parent Dashboard</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">🎓 Student Information</h3>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Student ID:</strong> {student.studentId}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">📝 Internal Assessment Marks</h3>
        {student.internalMarks ? (
          <ul className="list-disc list-inside">
            {Object.entries(student.internalMarks).map(([subject, mark]) => (
              <li key={subject}>
                <strong>{subject.toUpperCase()}:</strong> {mark}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Marks not updated yet.</p>
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">💻 LeetCode Stats</h3>
        {student.leetcodeId ? (
          <>
            <p><strong>LeetCode ID:</strong> {student.leetcodeId}</p>
            <p><strong>Problems Solved:</strong> 150</p>
            <p><strong>Ranking:</strong> Top 8%</p>
            {/* Replace with live API data in next step */}
          </>
        ) : (
          <p>No LeetCode ID provided.</p>
        )}
      </div>
    </div>
  );
}

export default ParentDashboard;

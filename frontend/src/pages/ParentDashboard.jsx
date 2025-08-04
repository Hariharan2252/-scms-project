function ParentDashboard() {
  const student = JSON.parse(localStorage.getItem("studentData")) || {};

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">👨‍👩‍👧 Parent View</h2>
      <div className="bg-white p-4 rounded shadow">
        <p><strong>Student Name:</strong> {student.name}</p>
        <p><strong>Student Email:</strong> {student.email}</p>
        <p><strong>Student ID:</strong> {student.studentId}</p>
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">📊 Attendance</h3>
          <p className="text-3xl text-green-600 font-bold">92%</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">📝 Marks</h3>
          <p className="text-3xl text-blue-600 font-bold">87%</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">💻 LeetCode</h3>
          <p className="text-md">Problems Solved: 150</p>
          <p className="text-md">Ranking: Top 8%</p>
        </div>
      </div>
    </div>
  );
}

export default ParentDashboard;

# 🎓 Smart Classroom Management Software (SCMS)

A modern web application to manage classroom operations efficiently using React, Firebase, and LeetCode integration.

---

## 🚀 Features

- 🔐 **Role-Based Authentication**
  - Student, Faculty, and Parent login/signup
- 🧑‍🎓 **Student Dashboard**
  - View marks, attendance, and LeetCode progress
  - Facial recognition attendance (planned)
- 👩‍🏫 **Faculty Dashboard**
  - View class performance and individual student details
- 👨‍👩‍👧‍👦 **Parent Dashboard**
  - Read-only access to child's progress
- ☁️ **Cloud Storage**
  - Firebase Firestore & Firebase Auth integration

---

## 📸 Preview

> _(Add a screenshot or gif below this if available)_

---

## 📂 Folder Structure






---

## 🔧 Technologies Used

| Tech          | Description                          |
|---------------|--------------------------------------|
| React.js      | Frontend UI                          |
| Firebase      | Auth + Firestore DB                  |
| Tailwind CSS  | UI styling                           |
| Vite          | Development server                   |
| LeetCode API  | (Mocked) Competitive coding insights |

---

## 🔑 User Roles

### 1. Student

- Can log in and view:
  - 👨‍🎓 Personal details
  - 📈 Attendance and marks
  - 💻 LeetCode statistics
- Future: Submit attendance via face recognition

### 2. Faculty

- Login as faculty to:
  - See total class strength
  - Access student dashboards

### 3. Parent

- Read-only view of their child's:
  - Marks
  - Attendance
  - LeetCode data

---

## 📥 Getting Started

```bash
git clone https://github.com/your-username/scms-project.git
cd scms-project/frontend
npm install
npm run dev

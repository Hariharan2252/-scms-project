import React from 'react';
import LeetCodeStats from "../components/LeetCodeStats";
import MainLayout from '../layouts/MainLayout';
// frontend/src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
};



const Dashboard = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Total Students</h2>
          <p className="text-3xl font-bold text-blue-600">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Today's Attendance</h2>
          <p className="text-3xl font-bold text-green-600">85%</p>
        </div>
        <LeetCodeStats username="hari_2252" />


        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Alerts</h2>
          <p className="text-3xl font-bold text-red-500">3</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;

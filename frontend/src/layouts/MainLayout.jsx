import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">SCMS Dashboard</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-500">
            Dashboard
          </Link>
        </nav>
      </header>

      <main className="p-6">{children}</main>

      <footer className="bg-white shadow text-center py-3 mt-8">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Smart Classroom Management System</p>
      </footer>
    </div>
  );
};

export default MainLayout;

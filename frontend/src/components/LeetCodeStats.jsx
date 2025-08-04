// src/components/LeetCodeStats.jsx
import React, { useEffect, useState } from "react";

const LeetCodeStats = ({ username }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;
    const fetchStats = async () => {
      try {
        const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        if (!res.ok) throw new Error("Failed to fetch LeetCode stats");
        const data = await res.json();
        setStats(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchStats();
  }, [username]);

  if (loading) return <p>Loading LeetCode stats...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!stats) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-bold mb-2 text-indigo-600">LeetCode Profile</h2>
      <p><strong>Total Solved:</strong> {stats.totalSolved}</p>
      <p><strong>Easy:</strong> {stats.easySolved} / {stats.totalEasy}</p>
      <p><strong>Medium:</strong> {stats.mediumSolved} / {stats.totalMedium}</p>
      <p><strong>Hard:</strong> {stats.hardSolved} / {stats.totalHard}</p>
      <p><strong>Ranking:</strong> #{stats.ranking}</p>
    </div>
  );
};

export default LeetCodeStats;

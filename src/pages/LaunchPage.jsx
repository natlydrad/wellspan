// src/pages/LaunchPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LaunchPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to WellSpan</h1>
      <p className="text-lg mb-8 max-w-md">
        Forecast your quality of life and explore how your decisions today impact your future health.
      </p>
      <button
        onClick={() => navigate('/app')}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-lg shadow-lg transition"
      >
        Buy Now
      </button>
    </div>
  );
};

export default LaunchPage;
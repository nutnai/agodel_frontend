// pages/dashboard.js
import React from 'react';
import Footer from '../components/footer';
const Dashboard = () => {
  return (
    <div className='overflow-auto h-full'>
    <div className="bg-gray-100 min-h-screen px-8">
      <div className="container mx-auto py-8 ml-2">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Hotel Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-96">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Total Rooms</h2>
            <p className="text-4xl font-bold text-blue-500">150</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Occupied Rooms</h2>
            <p className="text-4xl font-bold text-green-500">120</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Available Rooms</h2>
            <p className="text-4xl font-bold text-yellow-500">30</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Revenue</h2>
            <p className="text-4xl font-bold text-red-500">$25,000</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 min-h-screen px-8">
      <div className="container mx-auto py-8 ml-2">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Hotel Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-96">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Total Rooms</h2>
            <p className="text-4xl font-bold text-blue-500">150</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Occupied Rooms</h2>
            <p className="text-4xl font-bold text-green-500">120</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Available Rooms</h2>
            <p className="text-4xl font-bold text-yellow-500">30</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Revenue</h2>
            <p className="text-4xl font-bold text-red-500">$25,000</p>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Dashboard;

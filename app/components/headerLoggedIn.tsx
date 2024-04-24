// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 py-6 text-white flex justify-between">
      <div className="container">
        <h1 className="text-3xl font-bold ml-7">Agodel</h1>
      </div>
      <div className="flex items-center pr-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/th/c/c1/Chulalongkorn_University_Official_Logo.svg" // Replace with your profile picture URL
          alt="Profile Picture"
          className="w-10 h-10 rounded-full mr-2"
        />
        <span className="text-white text-lg font-semibold">Username</span>
      </div>
    </header>
  );
};

export default Header;

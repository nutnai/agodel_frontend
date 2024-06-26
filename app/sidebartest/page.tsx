"use client";
import React, { useState } from 'react';

const SidebarCustomer: React.FC = () => {
  const [contentVisible, setContentVisible] = useState<boolean>(false);

  const toggleContent = () => {
    setContentVisible(!contentVisible);
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-blue-500 shadow-md p-4 flex flex-col">
      {/* Picture of customer */}
      <div className="w-12 h-12 bg-gray-200 rounded-full mb-8"></div>

      {/* Information button */}
      <button onClick={toggleContent} className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md">
        Information
      </button>

      {/* My Booking button */}
      <button onClick={toggleContent} className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md">
        My Booking
      </button>

      {/* History button */}
      <button onClick={toggleContent} className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md">
        History
      </button>

      {/* Favorite button */}
      <button onClick={toggleContent} className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md">
        Favorite
      </button>

      {/* Sign out button */}
      <button onClick={toggleContent} className="w-full py-2 px-4 text-left bg-white hover:bg-gray-500 rounded-md">
        Sign out
      </button>

      {/* Content */}
      {contentVisible && (
        <div className="fixed left-64 top-0 right-0 bottom-0 bg-gray-200 p-4">
          {/* Your content goes here */}
          <h1>This is the content area</h1>
          <button onClick={toggleContent}>Close</button>
        </div>
      )}
    </div>
  );
};

export default SidebarCustomer;
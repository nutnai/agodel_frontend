// components/ReservedButton.js

import React, { useState } from 'react';

const ReservedButton = () => {
  const [isReserved, setIsReserved] = useState(false);

  const toggleReserved = () => {
    setIsReserved(prev => !prev);
  };

  return (
    <button
      onClick={toggleReserved}
      className={`flex items-center justify-center font-semibold w-24 h-12 rounded-2xl focus:outline-none text-indigo-900 ${
        isReserved ? 'bg-yellow-300' : 'bg-yellow-200'
      }`}
    >
      reserved
    </button>
  );
};

export default ReservedButton;

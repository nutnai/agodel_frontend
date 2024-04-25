// components/FavoriteButton.tsx

import React, { useState } from 'react';

interface FavoriteButtonProps {
  initialIsFavorite?: boolean;
  onToggle: (isFavorite: boolean) => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ initialIsFavorite = false, onToggle }) => {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  const handleClick = () => {
    const newIsFavorite = !isFavorite;
    setIsFavorite(newIsFavorite);
    onToggle(newIsFavorite);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center mt-1 w-10 h-10 rounded-full ${
        isFavorite ? 'bg-yellow-500' : 'bg-gray-200'
      } text-white focus:outline-none`}
    >
      {isFavorite ? (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4a2 2 0 012-2h12a2 2 0 012 2v16l-8-4-8 4V4z"
          />
        </svg>
      )}
    </button>
  );
};

export default FavoriteButton;

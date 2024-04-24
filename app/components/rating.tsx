// components/RatingStarBar.tsx

import React, { useState } from 'react';

interface RatingStarBarProps {
  rating: number;
  onChange: (rating: number) => void;
}

const RatingStarBar: React.FC<RatingStarBarProps> = ({ rating, onChange }) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const handleClick = (clickedIndex: number) => {
    if (clickedIndex === 0 && rating === 1) {
      onChange(0); // Set rating to zero if the first star is clicked again
    } else {
      onChange(clickedIndex + 1);
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredStar(index);
  };

  const handleMouseLeave = () => {
    setHoveredStar(null);
  };

  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      className={`h-6 w-6 fill-current ${
        (hoveredStar !== null && index <= hoveredStar) || index < Math.round(rating)
          ? 'text-yellow-500'
          : 'text-gray-400'
      } cursor-pointer`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      onClick={() => handleClick(index)}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <path
        fill="currentColor"
        d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" 
      />
    </svg>
  ));

  return <div className="flex mt-3">{stars}</div>;
};

export default RatingStarBar;

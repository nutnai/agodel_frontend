// components/HotelDetail.tsx

import React from 'react';

interface HotelDetailProps {
  location: string;
  facilities: string[];
  guests: number[];
  prices: number[];
}

const HotelDetail: React.FC<HotelDetailProps> = ({ location, facilities, guests, prices }) => {
  return (
    <div className="ml-16 bg-white p-6 flex justify-evenly">
      <div className='mt-3'>
        <div className="mb-4">
          <h3 className="text-lg text-indigo-600 font-semibold mb-2">Location:</h3>
          <p className="text-indigo-500">{location}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg mt-9 text-indigo-600 font-semibold mb-2">Facilities:</h3>
          <ul className="list-disc list-inside">
            {facilities.map((facility, index) => (
              <li key={index} className="text-indigo-500">
                {facility}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-lg text-indigo-600 font-semibold mb-0">Guest and Price:</h3>
        <table className="table-auto mt-3">
          <thead>
            <tr>
              <th className=" text-indigo-500 px-4 py-2">Guest</th>
              <th className="text-indigo-500 px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guestOption, index) => (
              <tr key={index}>
                <td className=" text-indigo-500 border px-4 py-2">
                  <ul>
                    <li>{guestOption} guests</li>
                  </ul>
                </td>
                <td className="text-indigo-500 border px-4 py-2">
                  <ul>
                    <li>{prices[index]} Baht per night</li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotelDetail;

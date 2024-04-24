// components/ReservedButton.js

import React, { useState } from 'react';

const ReservedButton = () => {
  const [isReserved, setIsReserved] = useState(false);

  const toggleReserved = () => {
    setIsReserved(prev => !prev);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <button
      onClick={toggleModal}
      className={`flex items-center justify-center font-semibold w-24 h-12 rounded-2xl focus:outline-none text-indigo-900 ${
        isReserved ? 'bg-yellow-300' : 'bg-yellow-200'
      }`}
    >
      reserved
    </button>
    {isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        
        <div className="bg-white w-7/12 h-4/6 rounded-lg shadow-lg">
        
        <div className='mt-20 flex justify-between'>
        <img className='w-44 h-32 ml-24' src="https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg" alt="" />
            <div className='mr-24'>
              Room type
            </div>
        </div>
        <div className='mt-12 flex justify-between'>
          <div className='ml-24'>
            <div>
              firstname
            </div>
            <div>
              lastname
            </div>
            <div id="dateStart">
              date start
            </div>
            <div id="dateEnd">
              date End
            </div>
          </div>
          <div className='mr-28'>
            หมายเหตุ
          </div>
        </div>
         
         
         <div className='mt-20 flex justify-end'>
          <button onClick={toggleModal} className="mr-10 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4">
              Close
          </ button>
          <button onClick={toggleModal} className="mr-10 bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-4">
              Confirm
          </button>
         </div>
          
        </div>
      
      
      
      </div>
    )}
    </div>
    
  );
};

export default ReservedButton;
// pages/receipt.tsx
"use client";
import React, { useState } from 'react';
import Header from '../components/headerLoggedIn';

const Receipt: React.FC = () => {

  return (
    <div>
        <Header />
    <div className="bg-white min-h-screen">
      <div className="bg-white p-8  flex justify-around border-2 pb-4 ">
        <h1 className="text-3xl  font-bold mb-4">Receipt </h1>



        <button className='bg-gray-200 font-bold shadow-lg rounded-md px-4 py-2 hover:bg-gray-300'> 
            Cancel 
        </button>
      </div>




      <div className='ml-24'>
        <div>
            receipt id
        </div>
        <div>
            status
        </div>
        <div>
            price
        </div>
        <div>
            หมายเหตุ
        </div>
        <div>
            firstname
        </div>
        <div>
            lastname
        </div>
        <div>
            date จอง
        </div>
        <div>
            date เริ่ม
        </div>
        <div>
            date จบ
        </div>
        <div>
            จำนวนวัน
        </div>
        <div>
            รายละเอียด
        </div>
      </div>
    </div>
    </div>
  );
};

export default Receipt;

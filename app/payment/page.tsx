// pages/PaymentPage.js
"use client";
import React, { useState } from 'react';
import Header from '../components/headerLoggedIn';
const PaymentPage = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-white h-screen">
        
        <div className='flex justify-around mt-8'>
            <div className=''>
                23402i40-2u4024u20
            </div>
            <div >
                <button className='gap-x-1.5 rounded-md bg-white px-8 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200'>
                    cancel
                </button> 
            </div>

        </div>
        <div className='grid justify-items-center'>
            <div className="mt-20 ">
            <label htmlFor="options" className=" text-gray-700">ช่องทาง</label>
            <select
              id="options"
              className="mt-1 block  px-24 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="QR Code">QR Code</option>
              <option value="บัตรเครดิต">บัตรเครดิต</option>
            </select>
          </div>
          {selectedOption === 'QR Code' && (
            <div className="mt-4">
              <div>
                QR พร้อมเพย์ เก็บเงินเมื่อเช็คอิน
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
               className="w-55" />
            </div>
          )}
          {selectedOption === 'บัตรเครดิต' && (
            <div className="max-w-md w-full p-6 bg-white">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                  Card Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cardNumber"
                  type="text"
                  placeholder="Enter card number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiration">
                  Expiration Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="expiration"
                  type="text"
                  placeholder="MM/YYYY"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                  CVV
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cvv"
                  type="text"
                  placeholder="Enter CVV"
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Pay Now
              </button>
            </form>
          </div>
          )}
            

        </div>
        



      
    </div>
  );
};

export default PaymentPage;

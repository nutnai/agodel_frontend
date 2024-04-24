"use client";
import React, { useState } from "react";

const SidebarCustomer =
  () => {
    const [isOpen, setIsOpen] =
      useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="fixed left-0 top-0 h-screen w-64 bg-blue-500 shadow-md p-4 flex flex-col">
        {/* Picture of customer */}
        <div className="w-12 h-12 bg-gray-200 rounded-full mb-8"></div>

        {/* Information button */}
        <button
          onClick={toggleModal}
          className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md"
        >
          Information
        </button>

        {/* My Booking button */}
        <button
          onClick={toggleModal}
          className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md"
        >
          My Booking
        </button>

        {/* History button */}
        <button
          onClick={toggleModal}
          className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md"
        >
          History
        </button>

        {/* Favorite button */}
        <button
          onClick={toggleModal}
          className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md"
        >
          Favorite
        </button>

        {/* Sign out button */}
        <button
          onClick={toggleModal}
          className="w-full py-2 px-4 text-left bg-white hover:bg-gray-500 rounded-md"
        >
          Sign out
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white w-7/12 h-4/6 rounded-lg shadow-lg">
              <div className="mt-20 flex justify-between">
                <img
                  className="w-44 h-32 ml-24"
                  src="https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg"
                  alt=""
                />
                <div className="mr-24">
                  Room type
                </div>
              </div>
              <div className="mt-12 flex justify-between">
                <div className="ml-24">
                  <div>firstname</div>
                  <div>lastname</div>
                  <div id="dateStart">
                    date start
                  </div>
                  <div id="dateEnd">
                    date End
                  </div>
                </div>
                <div className="mr-28">
                  หมายเหตุ
                </div>
              </div>

              <div className="mt-20 flex justify-end">
                <button
                  onClick={toggleModal}
                  className="mr-10 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Close
                </button>
                <button
                  onClick={toggleModal}
                  className="mr-10 bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

export default SidebarCustomer;

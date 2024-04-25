"use client";
import React, { useState } from "react";
import Userinfo from "../userInfo/page";
import MyBook from "../myBook/page";
import Userhistory from "../userHistory/page";
import Favorite from "../favorite/page";
const SidebarCustomer = () => {
  const [currentPage, setCurrentPage] =
    useState<string>("page0");

  const showPage = (pageId: string) => {
    setCurrentPage(pageId);
  };
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-blue-900 shadow-md p-4 flex flex-col">
        {/* Picture of customer */}
        <div className="w-12 h-12 bg-gray-200 rounded-full mb-8"></div>

        {/* Information button */}
        <button
          onClick={() =>
            showPage("pageInfo")
          }
          className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md"
        >
          Information
        </button>

        {/* My Booking button */}
        <button
          onClick={() =>
            showPage("pageBooking")
          }
          className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md"
        >
          My Booking
        </button>

        {/* History button */}
        <button
          onClick={() =>
            showPage("pageHistory")
          }
          className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md"
        >
          History
        </button>

        {/* Favorite button */}
        <button
          onClick={() =>
            showPage("pageFav")
          }
          className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md"
        >
          Favorite
        </button>

        {/* Sign out button */}
        <button className="w-full py-2 px-4 text-left bg-white hover:bg-gray-500 rounded-md">
          Sign out
        </button>
      </div>
      <div className="flex-grow">
        <div
          id="pageInfo"
          className={`page ${
            currentPage === "pageInfo"
              ? ""
              : "hidden"
          }`}
        >
          <div className="flex items-center justify-center bg-gray-900 bg-opacity-0">
            <div className="bg-white  w-full h-screen rounded-lg shadow-lg">
              <Userinfo />
            </div>
          </div>
        </div>
        <div
          id="pageBooking"
          className={`page ${
            currentPage ===
            "pageBooking"
              ? ""
              : "hidden"
          }`}
        >
          <div className="flex items-center justify-center bg-gray-900 bg-opacity-0">
            <div className="bg-white   w-full h-screen rounded-lg shadow-lg">
              <MyBook />
            </div>
          </div>
        </div>
        <div
          id="pageHistory"
          className={`page ${
            currentPage ===
            "pageHistory"
              ? ""
              : "hidden"
          }`}
        >
          <div className="flex items-center justify-center bg-gray-900 bg-opacity-0">
            <div className="bg-white   w-full h-screen rounded-lg shadow-lg">
              <Userhistory />
            </div>
          </div>
        </div>
        <div
          id="pageFav"
          className={`page ${
            currentPage === "pageFav"
              ? ""
              : "hidden"
          }`}
        >
          <div className="flex items-center justify-center bg-gray-900 bg-opacity-0">
            <div className="bg-white  w-full h-screen rounded-lg shadow-lg">
              <Favorite />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarCustomer;

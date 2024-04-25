"use client";
import React, { useState } from "react";
import Placeinfo from "../placeInfo/page";
import Booked from "../booked/page";
import Editroom from "../editRoom/page";
import History from "../history/page";
import Dashboard from "../dashboard/page";
const SidebarOwner = () => {
  const [currentPage, setCurrentPage] =
    useState<string>("page0");

  const showPage = (pageId: string) => {
    setCurrentPage(pageId);
  };
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-blue-500 shadow-md p-4 flex flex-col">
        {/* Picture of customer */}
        <div className="w-12 h-12 bg-gray-200 rounded-full mb-8"></div>

        {/* Information buttons */}
        <button
          onClick={() =>
            showPage("pageDashboard")
          }
          className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md"
        >
          Dashboard
        </button>
        <button
          onClick={() =>
            showPage("pageBooked")
          }
          className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md"
        >
          Booked
        </button>
        <button
          onClick={() =>
            showPage("pageInfo")
          }
          className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md"
        >
          Information
        </button>
        <button
          onClick={() =>
            showPage("pageEdit")
          }
          className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md"
        >
          Edit room
        </button>
        <button
          onClick={() =>
            showPage("pageHistory")
          }
          className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md"
        >
          History
        </button>
        {/* Sign out button */}
        <button className="w-full py-2 px-4 text-left bg-white hover:bg-gray-500 rounded-md">
          Sign out
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <div
          id="pageDashboard"
          className={`page ${
            currentPage ===
            "pageDashboard"
              ? ""
              : "hidden"
          }`}
        >
          <div className="flex items-center justify-center bg-gray-900 bg-opacity-0">
            <div className="bg-white w-full h-screen rounded-lg shadow-lg">
              <Dashboard />
            </div>
          </div>
        </div>
        <div
          id="pageBooked"
          className={`page ${
            currentPage === "pageBooked"
              ? ""
              : "hidden"
          }`}
        >
          <div className="flex items-center justify-center bg-gray-900 bg-opacity-0">
            <div className="bg-white w-full h-screen rounded-lg shadow-lg">
              <Booked />
            </div>
          </div>
        </div>
        <div
          id="pageInfo"
          className={`page ${
            currentPage === "pageInfo"
              ? ""
              : "hidden"
          }`}
        >
          <div className="flex items-center justify-center bg-gray-900 bg-opacity-0">
            <div className="bg-white w-full h-screen rounded-lg shadow-lg">
              <Placeinfo />
            </div>
          </div>
        </div>
        <div
          id="pageEdit"
          className={`page ${
            currentPage === "pageEdit"
              ? ""
              : "hidden"
          }`}
        >
          <div className="flex items-center justify-center bg-gray-900 bg-opacity-0">
            <div className="bg-white w-full h-screen rounded-lg shadow-lg">
              <Editroom />
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
            <div className="bg-white w-full h-screen rounded-lg shadow-lg">
              <History />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarOwner;

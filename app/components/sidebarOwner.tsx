"use client";
import React, {
  useState,
  useEffect,
} from "react";
import Placeinfo from "../placeInfo/page";
import Booked from "../booked/page";
import Editroom from "../editRoom/page";
import History from "../history/page";
import Dashboard from "../dashboard/page";
import Footer from "./footer";
import Ownerinfo from "../ownerInfo/page";
const SidebarOwner = () => {
  const [currentPage, setCurrentPage] =
    useState<string>("pageDashboard");
  useEffect(() => {
    // Check if there's a stored current page in localStorage
    const storedPage =
      localStorage.getItem(
        "currentPage"
      );
    if (storedPage) {
      setCurrentPage(storedPage);
    }
  }, []);

  const showPage = (pageId: string) => {
    setCurrentPage(pageId);
    localStorage.setItem("currentPage", pageId);
  };
  console.log(currentPage);
  const signout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    localStorage.removeItem("currentPage");
    window.location.href = "/";
  };

  return (
    <>
      <div className="flex max-h-screen">
        {/* Sidebar */}
        <div className="w-64  bg-blue-900 h-screen shadow-md p-4 flex flex-col">
          {/* Picture of customer */}
          <div className="w-12 h-12 bg-gray-200 rounded-full mb-8"></div>

          {/* Information buttons */}
          <button
            onClick={() =>
              showPage("pageDashboard")
            }
            className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-300 rounded-md"
          >
            Dashboard
          </button>
          <button
            onClick={() =>
              showPage("pageBooked")
            }
            className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-300 rounded-md"
          >
            Booked
          </button>
          <button
            onClick={() =>
              showPage("pageOwner")
            }
            className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-300 rounded-md"
          >
            Owner Information
          </button>
          <button
            onClick={() =>
              showPage("pageInfo")
            }
            className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-300 rounded-md"
          >
            Information
          </button>
          <button
            onClick={() =>
              showPage("pageEdit")
            }
            className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-300 rounded-md"
          >
            Edit room
          </button>
          <button
            onClick={() =>
              showPage("pageHistory")
            }
            className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-300 rounded-md"
          >
            History
          </button>
          {/* Sign out button */}
          <button
            onClick={signout}
            className="w-full py-2 px-4 text-left bg-white hover:bg-gray-300 rounded-md"
          >
            Sign out
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow  h-full">
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
              currentPage ===
              "pageBooked"
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
            id="pageOwner"
            className={`page ${
              currentPage ===
              "pageOwner"
                ? ""
                : "hidden"
            }`}
          >
            <div className="flex items-center justify-center bg-gray-900 bg-opacity-0">
              <div className="bg-white w-full h-screen rounded-lg shadow-lg">
                <Ownerinfo />
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
      
    </>
  );
};

export default SidebarOwner;

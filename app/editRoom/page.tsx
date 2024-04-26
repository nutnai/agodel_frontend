import React, { useState } from "react";
import Roomcreate from "../roomCreate/page";
export default function Editroom() {
  
  return (
    <>
      <div className="min-h-screen bg-white px-8">
        <div className="container mx-auto px-4 py-8 flex">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-900 p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap sm:flex-nowrap  items-center gap-4">
                <form className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                  <div className="w-full sm:w-auto">
                    <label
                      htmlFor="keyword"
                      className="block text-sm font-medium text-white"
                    >
                      Keyword
                    </label>
                    <input
                      type="text"
                      id="keyword"
                      name="keyword"
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      placeholder="Enter keyword"
                    />
                  </div>

                  <div className="w-full sm:w-auto">
                    <label
                      htmlFor="Available"
                      className="block text-sm font-medium text-white"
                    >
                      Available
                    </label>
                    <input
                      type="text"
                      id="Available"
                      name="Available"
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      min="1"
                    />
                  </div>

                  <div className="w-full sm:w-auto">
                    <button
                      type="submit"
                      className="bg-yellow-300 text-black font-semibold py-2 px-4 rounded-md hover:bg-yellow-400"
                    >
                      Search
                    </button>
                  </div>
                </form>
                <div className="w-full sm:w-auto">
                 <Roomcreate/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div>
              <div className="border border-gray-300 rounded-lg overflow-hidden flex p-4 items-center mt-8">
                <img className="w-1/4 h-auto" src="https://upload.opalcollection.com/app/uploads/sites/9/2022/07/22154724/HEADER_Stay-at-Jupiter-Beach-Resort.jpg"/>
                <div className="ml-4 flex gap-12 items-center justify-center">
                  <h2 className="text-xl font-semibold mb-2"></h2>
                  <p className="text-gray-600">
                    Room name:{"Awesome Hotel "}
                  </p>
                  <p className="text-gray-600">
                    Facility:{"Swimming Pool, Breakfast, Spa, Fitness, Coworking Areas" }
                  </p>
                  <p className="text-gray-600">
                    Price: 3500
                  </p>
                  <p className="text-gray-600">
                    -
                  </p>
                  <p className="text-gray-600">
                    Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

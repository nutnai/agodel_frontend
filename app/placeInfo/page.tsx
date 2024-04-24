import React, { useState } from "react";
export default function Placeinfo() {
  const [isEditable, setIsEditable] =
    useState(false);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleCancel = () => {
    setIsEditable(false);
  };

  return (
    <>
      <div className="mx-auto p-4 min-h-screen bg-white w-full px-40  ">
        <div className="border-solid rounded-lg border-8 border-yellow-200 p-5 mt-5">
          <h1 className="text-2xl font-semibold mb-4">
            Place information
          </h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="placename"
                className="block text-gray-600 mb-1"
              >
                Place name:
              </label>
              <input
                type="text"
                id="placename"
                name="placename"
                readOnly={!isEditable}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-600 mb-1"
              >
                Address:
              </label>
              <textarea
                id="address"
                name="address"
                readOnly={!isEditable}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="publish,private"
                className="block text-gray-600 mb-1"
              >
                Publish,Private:
              </label>
              <input
                type="text"
                id="publish,private"
                name="publish,private"
                readOnly={!isEditable}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="img"
                className="block text-gray-600 mb-1"
              >
                Image
              </label>

              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                readOnly={!isEditable}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>

            {!isEditable ? (
              <button
                type="button"
                onClick={handleEdit}
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                Edit
              </button>
            ) : (
              <>
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-4 rounded-md mr-2 hover:bg-green-700 focus:outline-none focus:bg-indigo-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:bg-gray-700"
                >
                  Cancel
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

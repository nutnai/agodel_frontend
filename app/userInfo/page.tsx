import React, { useState } from "react";

export default function Userinfo() {
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
      <div className="mx-auto p-4 min-h-screen bg-white w-full px-40">
        <div className="border-solid rounded-lg border-8 border-yellow-200 p-5 mt-5">
          <h1 className="text-2xl font-semibold mb-4">
            User information
          </h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-600 mb-1"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                readOnly={!isEditable}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-600 mb-1"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                readOnly={!isEditable}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-gray-600 mb-1"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                readOnly={!isEditable}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 mb-1"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                readOnly={!isEditable} // Toggle readOnly based on isEditable state
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-600 mb-1"
              >
                Phone Number:
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                readOnly={!isEditable}
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

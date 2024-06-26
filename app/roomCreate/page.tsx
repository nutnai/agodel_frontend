"use client";
import React, { useState } from "react";
export default function Roomcreate() {
  const [checked, setChecked] =
    useState(false);
  console.log(checked);
  const handleToggle = () => {
    setChecked(!checked);
  };
  const id = localStorage.getItem("id");
  const token =
    localStorage.getItem("login");
  const [room, setRoom] = useState({
    roomType: "",
    facility: "",
    people: "0",
    price: "0",
    status: "",
  });
  const handleChange = (e: any) => {
    setRoom({
      ...room,
      [e.target.name]: e.target.value,
    });
    console.log("room:", room);
  };
  const handleSubmit = async (
    e: any
  ) => {
    e.preventDefault();
    const parsedPeople = parseInt(
      room.people,
      10
    );
    const parsedPrice = parseInt(
      room.price,
      10
    );
    const status = checked
      ? "AVAILABLE"
      : "UNAVAILABLE";
    try {
      const response = await fetch(
        "/api/room/create",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
            authorization:
              "Bearer " + token,
          },
          body: JSON.stringify({
            ownerId: id,
            roomType: room.roomType,
            facility: room.facility,
            numberPeople: parsedPeople,
            price: parsedPrice,
            status: status,
          }),
        }
      );
      const data =
        await response.json();
      if (!response.ok) {
        alert(data.message);
      }
      if (response.ok) {
        console.log(response);
        alert(
          "data has created successfully"
        );
        console.log(
          "Data sent successfully:",
          response
        );
      }
    } catch (error) {
      console.error(
        "Error sending data:",
        error
      );
    } // Implement logic to save edited information
    // For example, send a PATCH or PUT request to update the customer info
  };
  const [isOpen, setIsOpen] =
    useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };  
  const close = () => {
    setIsOpen(!isOpen);
    window.location.reload();
  };
  console.log(isOpen);

  return (
    <>
      <div className="w-full sm:w-auto">
        <button
          onClick={toggleModal}
          className="bg-yellow-300 text-black font-semibold py-2 px-4 rounded-md hover:bg-yellow-400"
        >
          Add
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg  p-8 h-auto max-h-[80vh] overflow-y-auto">
            {/* Render the Roomcreate component */}
            <div className="h-auto w-auto px-40 py-10 bg-white">
              <form
                onSubmit={handleSubmit}
              >
                <div className="mb-4 w-auto">
                  <label
                    htmlFor="roomType"
                    className="block text-gray-600 mb-1"
                  >
                    Room type name:
                  </label>
                  <input
                    type="text"
                    id="roomType"
                    name="roomType"
                    value={
                      room.roomType
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="facility"
                    className="block text-gray-600 mb-1"
                  >
                    Facility:
                  </label>
                  <textarea
                    id="facility"
                    name="facility"
                    value={
                      room.facility
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="people"
                    className="block text-gray-600 mb-1"
                  >
                    Person per room:
                  </label>
                  <input
                    type="number"
                    id="people"
                    name="people"
                    value={room.people}
                    onChange={
                      handleChange
                    }
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-gray-600 mb-1"
                  >
                    Price:
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={room.price}
                    onChange={
                      handleChange
                    }
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="switch block text-gray-600 ">
                    Available?:
                  </label>
                  <input
                    className="w-6 h-6"
                    type="checkbox"
                    id="status"
                    name="status"
                    checked={checked}
                    onChange={
                      handleToggle
                    }
                  />
                  <span className="slider round"></span>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="etc"
                    className="block text-gray-600 mb-1"
                  >
                    etc:
                  </label>
                  <textarea
                    id="etc"
                    name="etc"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                  ></textarea>
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
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
                      Delete this room
                    </button>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700"
                    >
                      save
                    </button>
                  </div>
                </div>
              </form>
              <button
                onClick={close}
                className="bg-indigo-600 mt-4 w-full text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";
import React, {
  useState,
  useEffect,
} from "react";
import ToggleSwitch from "../components/switch";
export default function Placeinfo() {
  const [place, setPlace] = useState({
    place_id: "",
    name: "",
    address: "",
    owner: [],
    status: "",
  });
  const [checkeds, setCheckeds] =
    useState(true);
  const [
    editablePlace,
    setEditablePlace,
  ] = useState({
    place_id: "",
    name: "",
    address: "",
    owner: [],
    status: "",
  });
  const id = localStorage.getItem("id");
  useEffect(() => {
    const fetchPlaceInfo = async () => {
      try {
        const response = await fetch(
          "/api/place/detail",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              ownerId: id,
            }),
          }
        );
        if (!response.ok) {
          throw new Error(
            "Failed to fetch username"
          );
        }
        const data =
          await response.json();
        console.log(data);
        console.log(data.place);
        setPlace(data.place);
        setEditablePlace(data.place);
        console.log(data.place.status);
        console.log(place);
        console.log(editablePlace);
      } catch (error) {
        console.error(
          "Error fetching place:",
          error
        );
        // Handle error
      }
    };

    fetchPlaceInfo();
  }, []);
  useEffect(() => {
    // Update checkeds based on editablePlace.status
    setCheckeds(
      editablePlace.status === "public"
    );
  }, [editablePlace.status]);
  console.log(checkeds);
  const [isEditable, setIsEditable] =
    useState(false);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleCancel = () => {
    setIsEditable(false);
    setEditablePlace(place);
    setCheckeds(
      editablePlace.status === "public"
    );
  };
  console.log(isEditable);
  const handleChange = (e: any) => {
    setEditablePlace({
      ...editablePlace,
      [e.target.name]: e.target.value,
    });
    console.log(
      "Editable Customer:",
      editablePlace
    );
  };
  const handleSubmit = async (
    e: any
  ) => {
    e.preventDefault();
    setIsEditable(false);
    setPlace(editablePlace); // Disable edit mode after saving
    if (checkeds === true) {
      editablePlace.status = "public";
    }
    if (checkeds === false) {
      editablePlace.status = "private";
    }
    try {
      const response = await fetch(
        "/api/place/edit",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            ownerId: id,
            newAddress:
              editablePlace.address,
            newName: editablePlace.name,
            newStatus:
              editablePlace.status,
          }),
        }
      );
      console.log(response);
      alert("data has updated");
      console.log(
        "Data sent successfully:",
        response
      );
    } catch (error) {
      console.error(
        "Error sending data:",
        error
      );
    } // Implement logic to save edited information
    // For example, send a PATCH or PUT request to update the customer info
  };

  return (
    <>
      <div className="mx-auto p-4 min-h-screen bg-white w-full px-40  ">
        <div className="border-solid rounded-lg border-8 border-blue-200 p-5 mt-5">
          <h1 className="text-2xl font-semibold mb-4">
            Place information
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 mb-1"
              >
                Place name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={
                  editablePlace.name ||
                  ""
                }
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
                onChange={handleChange}
                value={
                  editablePlace.address ||
                  ""
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
            <ToggleSwitch
              label="private"
              value="public"
              checked={checkeds}
              readOnly={!isEditable}
              onChange={(checked) => {
                console.log(checked);
                setCheckeds(!checkeds);
              }}
            />
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
                className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-indigo-700"
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

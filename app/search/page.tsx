"use client";
import Placesearch from "../components/placeSearch";
import Header from "../components/header";
import Footer from "../components/footer";
import HeaderLoggedIn from "../components/headerLoggedIn";
import React, {
  useState,
  useEffect,
} from "react";
export default function Search() {
  const detail = (roomId: string) => {
    // Set roomId in localStorage and redirect to detail page
    localStorage.setItem(
      "roomId",
      roomId
    );
    window.location.href = "/detail";
  };
  
  const [room, setRoom] = useState([]);
  const [isLoggedIn, setIsLoggedIn] =
    useState(false);
  useEffect(() => {
    // Check if user is logged in when component mounts
    console.log(
      localStorage.getItem("login")
    );
    console.log(
      localStorage.getItem("role")
    ); // Log the value of "login" from localStorage
    if (
      localStorage.getItem("login") ===
      "login"
    ) {
      setIsLoggedIn(true);
    }
    if(localStorage.getItem("roomsearch") !== "undefined"){const storedHotels =
      localStorage.getItem(
        "roomsearch"
      );
    if (storedHotels) {
      setRoom(
        JSON.parse(storedHotels)
      );}
      
    }
  }, []);

  const hotels = [
    {
      id: 1,
      name: "Siam@Siam Design Hotel Bangkok",
      image:
        "https://f.ptcdn.info/973/041/000/o5ywjwbf9S1Ptz4IGn7-o.jpg", // Example image file path
      score: 4.5,
      price: 100,
    },
    {
      id: 2,
      name: "Holiday Inn Express Bangkok Siam",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241160563.jpg?k=9baa5849c66ff7543e4b594ac910e86c0b0c0c2e661808732a7dff82663c0a9f&o=&hp=1", // Example image file path
      score: 4.2,
      price: 150,
    },
    // Add more hotel objects as needed
  ];
  return (
    <>
      <div className="min-h-screen bg-white">
        <Placesearch />

          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-4">
                Available Hotels
              </h2>
              <div>
                {room.map((room) => (
                  <button
                    key={room.roomId}
                    className="w-full"
                    onClick={() =>
                      detail(
                        room.roomId
                      )
                    }
                  >
                    <div className="border border-gray-300 rounded-lg overflow-hidden flex py-4 px-4 items-center mt-8">
                      <img
                        src={
                          "https://f.ptcdn.info/973/041/000/o5ywjwbf9S1Ptz4IGn7-o.jpg"
                        }
                        className="w-1/4 h-auto rounded-md"
                        alt={
                          room.roomType
                        }
                      />
                      <div className="ml-4 flex gap-12 items-center justify-center">
                        <h2 className="text-m font-semibold mb-2">
                          {
                            room.roomType
                          }
                        </h2>
                        <p className="text-gray-600">
                          Facility:{" "}
                          {
                            room.facility
                          }
                        </p>
                        <p className="text-gray-600">
                          Number of
                          people per
                          room:{" "}
                          {
                            room.numberPeople
                          }
                        </p>
                        <p className="text-gray-600">
                          Price: $
                          {room.price}{" "}
                          per night
                        </p>
                        <p className="text-gray-600">
                          Status:{" "}
                          {room.status}
                        </p>
                        <p className="text-gray-600">
                          From:{" "}
                          {
                            room.place
                              .name
                          }
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
      </div>
      <Footer />
    </>
  );
}

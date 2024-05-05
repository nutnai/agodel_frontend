"use client";
import React, {
  useState,
  useEffect,
} from "react";
import Header from "./components/header";
import HeaderLoggedIn from "./components/headerLoggedIn";
import YellowBox from "./components/yellowbox";
import Footer from "./components/footer";
import Placesearch from "@/app/components/placeSearch";
const Home = () => {
  const ownerClick = () => {
    localStorage.setItem(
      "role",
      "owner"
    );
  };

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
  }, []);
  console.log(isLoggedIn);
  const ads = [
    {
      id: 1,
      title: "Luxury Suite",
      description:
        "Experience luxury like never before. Book our exclusive suite today!",
      imageUrl:
        "https://www.venicecollection.com/palazzo-veneziano/wp-content/uploads/sites/2/2017/08/Luxury-Spa-Suite-05-1600x800.jpg",
      price: "$500/night",
    },
    {
      id: 2,
      title: "",
      description:
        "Wake up to breathtaking ocean views every morning. Book now!",
      imageUrl:
        "https://conradproperties-1f861.kxcdn.com/uploads/properties/1996/beachfront-villas-for-sale-in-phuket-87195984.jpg",
      price: "$700/night",
    },
    {
      id: 3,
      title: "City Skyline Apartment",
      description:
        "Enjoy stunning views of the city skyline from your own private apartment.",
      imageUrl:
        "https://static.giggster.com/images/location/ca5202c1-854f-4eb2-83c0-635c5f1e01e4/d859ba35-e9fa-474f-8b44-dfe8ae061b22/full_hd_retina.jpeg",
      price: "$400/night",
    },
  ];

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Placesearch />
      {!isLoggedIn && (
        <div className="px-8">
          <a href="/signup">
            <button
              className="underline"
              onClick={ownerClick}
            >
              Your place dind't on this
              website?
            </button>
          </a>
        </div>
      )}
      <div className="p-8">
        {/* <button onClick={test}>Test</button> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={ad.imageUrl}
                alt={ad.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {ad.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {ad.description}
                </p>
                <p className="text-lg font-semibold text-blue-500">
                  {ad.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

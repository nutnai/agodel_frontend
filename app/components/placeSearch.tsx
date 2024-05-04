"use client";
import React, {
  useState,
  useEffect,
} from "react";
export default function Placesearch() {
  const [search, setSearch] = useState({
    address: "",
    numberPeople: "0",
    lowerPrice: "0",
    upperPrice: "1000000",
  });
  useEffect(() => {
    const storedSearch = localStorage.getItem("search");
    if (storedSearch) {
      setSearch(JSON.parse(storedSearch)[0]);
    }
  }, []);
  const handleChange = (e: any) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
    console.log("search:", search);
  };
  

  const handleSubmit = async (
    e: any
  ) => {
    e.preventDefault();
    const parsedPeople = parseInt(
      search.numberPeople,
      10
    );
    const parsedLowerPrice = parseInt(
      search.lowerPrice,
      10
    );
    const parsedUpperPrice = parseInt(
      search.upperPrice,
      10
    );
    try {
      const response = await fetch(
        "/api/place/search",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            address: search.address,
            numberPeople: parsedPeople,
            lowerPrice:
              parsedLowerPrice,
            upperPrice:
              parsedUpperPrice,
          }),
        }
      );
      const data =
        await response.json();
      console.log(data);
      console.log("search:", search);
      setSearch(data.places);
      localStorage.setItem("roomsearch", JSON.stringify(data.places));
      localStorage.setItem("search", JSON.stringify([search]));
      window.location.href = "/search";
    } catch (error) {
      console.error(
        "Error fetching search:",
        error
      );
    }
  };
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-900 p-6 rounded-lg shadow-md w-auto">
          <form
            className="flex flex-row sm:flex-nowrap items-center gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col sm:flex-nowrap items-center gap-4">
              <div className="grid grid-cols-4 gap-6">
                <div className="w-full sm:w-auto">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium  text-white"
                  >
                    Keyword
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={
                      search.address
                    }
                    onChange={
                      handleChange
                    }
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    placeholder="Enter keyword"
                  />
                </div>
                <div className="w-full sm:w-auto">
                  <label
                    htmlFor="dates"
                    className="block text-sm font-medium text-white"
                  >
                    Date Start
                  </label>
                  <input
                    type="date"
                    id="dates"
                    name="dates"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>
                <div className="w-full sm:w-auto">
                  <label
                    htmlFor="datee"
                    className="block text-sm font-medium text-white"
                  >
                    Date End
                  </label>
                  <input
                    type="date"
                    id="datee"
                    name="datee"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>
                <div className="w-full sm:w-auto">
                  <label
                    htmlFor="numberPeople"
                    className="block text-sm font-medium text-white"
                  >
                    Number of Persons
                  </label>
                  <input
                    type="number"
                    id="numberPeople"
                    name="numberPeople"
                    value={
                      search.numberPeople
                    }
                    onChange={
                      handleChange
                    }
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    min="0"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="w-full sm:w-auto">
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-white"
                  >
                    Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  >
                    <option value="single">
                      Single
                    </option>
                    <option value="double">
                      Double
                    </option>
                    <option value="suite">
                      Suite
                    </option>
                  </select>
                </div>
                <div className="w-full sm:w-auto">
                  <label
                    htmlFor="lowerPrice"
                    className="block text-sm font-medium text-white"
                  >
                    Price min
                  </label>
                  <input
                    type="number"
                    id="lowerPrice"
                    name="lowerPrice"
                    value={
                      search.lowerPrice
                    }
                    onChange={
                      handleChange
                    }
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    min="0"
                  />
                </div>
                <div className="w-full sm:w-auto">
                  <label
                    htmlFor="upperPrice"
                    className="block text-sm font-medium text-white"
                  >
                    Price max
                  </label>
                  <input
                    type="number"
                    id="upperPrice"
                    name="upperPrice"
                    value={
                      search.upperPrice
                    }
                    onChange={
                      handleChange
                    }
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    min="0"
                  />
                </div>
              </div>
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
        </div>
      </div>
    </div>
  );
}

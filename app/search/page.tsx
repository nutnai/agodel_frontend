import Placesearch from "../../resource/components/placeSearch";
export default function Search() {
  const hotels = [
    {
      id: 1,
      name: "Hotel A",
      image: "hotel_a.jpg", // Example image file path
      score: 4.5,
      price: 100,
    },
    {
      id: 2,
      name: "Hotel B",
      image: "hotel_b.jpg", // Example image file path
      score: 4.2,
      price: 150,
    },
    // Add more hotel objects as needed
  ];
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-indigo-700 p-6 rounded-lg shadow-md w-auto">
              <form className="flex flex-row sm:flex-nowrap items-center gap-4">
                <div className="flex flex-col sm:flex-nowrap items-center gap-4">
                  <div className="grid grid-cols-4 gap-6">
                    <div className="w-full sm:w-auto">
                      <label
                        htmlFor="keyword"
                        className="block text-sm font-medium  text-white"
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
                        htmlFor="numberOfPersons"
                        className="block text-sm font-medium text-white"
                      >
                        Number of
                        Persons
                      </label>
                      <input
                        type="number"
                        id="numberOfPersons"
                        name="numberOfPersons"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        min="1"
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
                        htmlFor="pricemin"
                        className="block text-sm font-medium text-white"
                      >
                        Price min
                      </label>
                      <input
                        type="number"
                        id="pricemin"
                        name="pricemin"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        min="1"
                      />
                    </div>
                    <div className="w-full sm:w-auto">
                      <label
                        htmlFor="pricemax"
                        className="block text-sm font-medium text-white"
                      >
                        Price max
                      </label>
                      <input
                        type="number"
                        id="pricemax"
                        name="pricemax"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        min="1"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-auto">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Hotel listings */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">
              Available Hotels
            </h2>
            <div>
              <button className="w-full">
                {hotels.map((hotel) => (
                  <div
                    key={hotel.id}
                    className="border border-gray-300 rounded-lg overflow-hidden flex  items-center mt-8"
                  >
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-1/4 h-auto"
                    />
                    <div className="ml-4 flex gap-12 items-center justify-center">
                      <h2 className="text-xl font-semibold mb-2">
                        {hotel.name}
                      </h2>
                      <p className="text-gray-600">
                        Score:{" "}
                        {hotel.score}
                      </p>
                      <p className="text-gray-600">
                        Price: $
                        {hotel.price}{" "}
                        per night
                      </p>
                    </div>
                  </div>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

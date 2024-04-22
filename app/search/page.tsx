import Header from "../../resource/components/header";
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
      <Header />
      <div className="min-h-screen bg-white">
        <Placesearch />

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

import Placesearch from "../components/placeSearch";
import Header from "../components/header";
import Footer from "../components/footer";
import HeaderLoggedIn from "../components/headerLoggedIn";
export default function Search() {
  const hotels = [
    {
      id: 1,
      name: "Siam@Siam Design Hotel Bangkok",
      image: "https://f.ptcdn.info/973/041/000/o5ywjwbf9S1Ptz4IGn7-o.jpg", // Example image file path
      score: 4.5,
      price: 100,
    },
    {
      id: 2,
      name: "Holiday Inn Express Bangkok Siam",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241160563.jpg?k=9baa5849c66ff7543e4b594ac910e86c0b0c0c2e661808732a7dff82663c0a9f&o=&hp=1", // Example image file path
      score: 4.2,
      price: 150,
    },
    // Add more hotel objects as needed
  ];
  return (
    <>
    <HeaderLoggedIn/>
      <div className="min-h-screen bg-white">
        <Placesearch/>

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
                    className="border border-gray-300 rounded-lg overflow-hidden flex py-4 px-4  items-center mt-8"
                  >
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-1/4 h-auto rounded-md"
                    />
                    <div className="ml-4 flex gap-12 items-center justify-center">
                      <h2 className="text-m font-semibold mb-2">
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
      <Footer/>
    </>
  );
}

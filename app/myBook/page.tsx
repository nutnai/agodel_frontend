import Placesearch from "../../resource/components/placeSearch";
import Header from "../components/headerLoggedIn";
export default function MyBook() {
  const hotels = [
    {
      id: 1,
      name: "Hotel A",
      dateBook:"dateจอง",
      dateStart:"dateเริ่ม",
      dateEnd:"dateจบ", 
      day: "จำนวนวัน",
      status: "status",
    },
    {
        id: 2,
        name: "Hotel B",
        dateBook:"dateจอง",
        dateStart:"dateเริ่ม",
        dateEnd:"dateจบ", 
        day: "จำนวนวัน",
        status: "status",
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
             My Book
            </h2>
            <div>
              <button className="w-full">
                {hotels.map((hotel) => (
                  <div
                    key={hotel.id}
                    className="border border-gray-300 rounded-lg overflow-hidden flex  items-center mt-8"
                  >
                    
                    <div className="ml-4 flex gap-12 items-center justify-center">
                      <h2 className="text-xl font-semibold mb-2">
                        {hotel.name}
                      </h2>
                      <p className="text-gray-600">
                        DateBooked:{" "}
                        {hotel.dateBook}
                      </p>
                      <p className="text-gray-600">
                        DateStart:{" "}
                        {hotel.dateStart}{" "}
                      </p>
                      <p className="text-gray-600">
                        DateEnd:{" "}
                        {hotel.dateEnd}{" "}
                      </p>
                      <p className="text-gray-600">
                        Day:{" "}
                        {hotel.day}{" "}
                      </p>
                      <p className="text-gray-600">
                        Status:{" "}
                        {hotel.status  }{" "}
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

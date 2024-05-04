import React, {
  useState,
  useEffect,
} from "react";
import Roomcreate from "../roomCreate/page";
import Footer from "../components/footer";
export default function Editroom() {
  const [rooms, setRooms] = useState(
    []
  );
  const id = localStorage.getItem("id");
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log("Rooms:", rooms);
  }, [rooms]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "/api/room/detail",
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
      const data =
        await response.json();
      setRooms(data.room);
      console.log("data", data);
      console.log(rooms);
      window.localStorage.reload;
    } catch (error) {
      console.error(
        "Error fetching data:",
        error
      );
    }
  };
  return (
    <>
      <div className="overflow-auto h-screen bg-white px-8 ">
        
        <div className=" mx-auto px-4 py-8 flex">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-900 p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap sm:flex-nowrap  items-center gap-4">
                <form className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                  <div className="w-full sm:w-auto">
                    <label
                      htmlFor="keyword"
                      className="block text-sm font-medium text-white"
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
                      htmlFor="Available"
                      className="block text-sm font-medium text-white"
                    >
                      Available
                    </label>
                    <input
                      type="text"
                      id="Available"
                      name="Available"
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      min="1"
                    />
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
                <div className="w-full sm:w-auto">
                  <Roomcreate />
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        <div className="container mx-auto px-4 py-8 -mt-11">
          <div className="max-w-4xl mx-auto ">
            <div className="h-96 ">
              {rooms.map(
                (room, index) => (
                  console.log(room),

                  (
                    <div
                      key={index}
                      className="border border-gray-300 rounded-lg overflow-hidden flex p-4 items-center mt-8"
                    >
                      <img
                        className="w-1/4 h-auto"
                        src="https://upload.opalcollection.com/app/uploads/sites/9/2022/07/22154724/HEADER_Stay-at-Jupiter-Beach-Resort.jpg"
                      />
                      <div className="ml-4 flex gap-12 items-center justify-center">
                        <h2 className="text-xl font-semibold mb-2">
                          {room.roomId}
                        </h2>
                        <p className="text-gray-600">
                          Room name:{" "}
                          {
                            room.roomType
                          }
                        </p>
                        <p className="text-gray-600">
                          Facility:{" "}
                          {
                            room.facility
                          }
                        </p>
                        <p className="text-gray-600">
                          Price:{" "}
                          {room.price}
                        </p>
                        {/* Add more fields as needed */}
                      </div>
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </div>
        </div>

        
        

       
      
      
    </>
  );
}

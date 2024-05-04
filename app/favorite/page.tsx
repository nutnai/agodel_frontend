import Placesearch from "../components/placeSearch";
import Reciptsearch from "../components/receiptSearch";
export default function Favorite() {
  // const hotels = [
  //   {
  //     id: 1,
  //     name: "Hotel A",
  //     dateBook:"dateจอง",
  //     dateStart:"dateเริ่ม",
  //     dateEnd:"dateจบ", 
  //     day: "จำนวนวัน",
  //     status: "status",
  //   },
  //   {
  //       id: 2,
  //       name: "Hotel B",
  //       dateBook:"dateจอง",
  //       dateStart:"dateเริ่ม",
  //       dateEnd:"dateจบ", 
  //       day: "จำนวนวัน",
  //       status: "status",
  //   },
  //   // Add more hotel objects as needed
  // ];
  return (
    <div className="overflow-auto h-full">
      <div className=" h-5/6 bg-white px-8 mt-20">
        
        <div className="max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex">
            <div className="w-1/3 py-4 px-4">
              <img
                src="https://f.ptcdn.info/973/041/000/o5ywjwbf9S1Ptz4IGn7-o.jpg"
                alt="Hotel"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="w-2/3 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Username:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    Patcharapol Sohheng
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Room NO.:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    401
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Date Start:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    20/5/2024
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Status:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    -
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Date end:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    22/5/2024
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    etc.:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    -
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-20">
          <div className="flex">
            <div className="w-1/3 py-4 px-4">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/241160563.jpg?k=9baa5849c66ff7543e4b594ac910e86c0b0c0c2e661808732a7dff82663c0a9f&o=&hp=1"
                alt="Hotel"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="w-2/3 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Username:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    Jiraphit Srisan
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Room NO.:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    309
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Date Start:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    4/3/2024
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Status:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    -
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Date end:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    5/3/2024
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    etc.:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    -
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div><div className="max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-20">
          <div className="flex">
            <div className="w-1/3 py-4 px-4">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/241160563.jpg?k=9baa5849c66ff7543e4b594ac910e86c0b0c0c2e661808732a7dff82663c0a9f&o=&hp=1"
                alt="Hotel"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="w-2/3 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Username:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    Jiraphit Srisan
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Room NO.:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    309
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Date Start:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    4/3/2024
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Status:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    -
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Date end:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    5/3/2024
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    etc.:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    -
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

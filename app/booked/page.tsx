import Reciptsearch from '../components/receiptSearch';
import Header from '../components/headerLoggedIn';
import Footer from '../components/footer';
export default function Booked() {
  return (
    <>
      <div className="min-h-screen bg-white px-8">
        <div className="bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-6">
              <div className="flex space-x-4">
                <button className="text-gray-800 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 bg-blue-400 p-4 border rounded-md hover:bg-indigo-700">
                  New
                </button>
                <button className="text-gray-800 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 bg-blue-400 p-4 border rounded-md hover:bg-indigo-700">
                  Wait Checkin
                </button>
              </div>
            </div>
            <div className="w-full h-1 bg-blue-500"></div>
          </div>
        </div>
        <Reciptsearch/>
        <div className="max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex">
            <div className="w-1/3">
              <img
                src="your-image-url.jpg"
                alt="Hotel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-2/3 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Username:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    xxx
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Room NO.:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    xxx
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Date Start:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    xxx
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Status:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    xxx
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    Date end:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    xxx
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-gray-600">
                    etc.:
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    xxx
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import SidebarCustomer from "@/resource/components/sidebarCustomer";
import SidebarOwner from "@/resource/components/sidebarOwner";
import Reciptsearch from "@/resource/components/receiptSearch";
export default function History() {
  return (
    <>
      <div className="min-h-screen bg-white">
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



export default function SidebarCustomer() {
  return (
    <>
      <div className="h-screen w-64 bg-blue-500 shadow-md p-4 flex flex-col">
        {/* Picture of customer */}
        <div className="w-12 h-12 bg-gray-200 rounded-full mb-8"></div>

        {/* Information button */}
        <button className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md">
          Information
        </button>

        {/* My Booking button */}
        <button className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md">
          My Booking
        </button>

        {/* History button */}
        <button className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md">
          History
        </button>

        {/* Favorite button */}
        <button className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md">
          Favorite
        </button>

        {/* Sign out button */}
        <button className="w-full py-2 px-4 text-left bg-white  hover:bg-gray-500 rounded-md">
          Sign out
        </button>
      </div>
    </>
  );
}

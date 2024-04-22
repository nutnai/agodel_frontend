
export default function SidebarOwner() {
  return (
    <>
      <div className="h-screen w-64 bg-blue-500 shadow-md p-4 flex flex-col">
        <div className="w-12 h-12 bg-gray-200 rounded-full mb-8"></div>

        <button className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md">
          Dashboars
        </button>

        <button className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md">
          Booked
        </button>

        <button className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md">
          Information
        </button>

        <button className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md">
          Editroom
        </button>

        <button className="w-full py-2 px-4 mb-6 text-left bg-white hover:bg-gray-500 rounded-md">
          History
        </button>

        <button className="w-full py-2 px-4 text-left bg-white hover:bg-gray-500 rounded-md">
          Sign out
        </button>
      </div>
    </>
  );
}


export default function Roomcreate() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <form>
          <div className="mb-4">
            <label
              htmlFor="roomtypename"
              className="block text-gray-600 mb-1"
            >
              Room type name:
            </label>
            <input
              type="text"
              id="roomtypename"
              name="roomtypename"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="facility"
              className="block text-gray-600 mb-1"
            >
              Facility:
            </label>
            <textarea
              id="facility"
              name="facility"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="person"
              className="block text-gray-600 mb-1"
            >
              Person per room:
            </label>
            <input
              type="number"
              id="person"
              name="person"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-600 mb-1"
            >
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="available"
              className="block text-gray-600 mb-1"
            >
              Available:
            </label>
            <input
              type="text"
              id="available"
              name="available"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="etc"
              className="block text-gray-600 mb-1"
            >
              etc:
            </label>
            <textarea
              id="etc"
              name="etc"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="img"
              className="block text-gray-600 mb-1"
            >
              Image
            </label>

            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <button
                type="submit"
                className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                Delete this room
              </button>
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                back
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

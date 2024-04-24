export default function Placeinfo() {
  return (
    <>
      <div className="mx-auto p-4 min-h-screen bg-white w-full px-40  ">
        <div className="border-solid rounded-lg border-8 border-yellow-200 p-5 mt-5">
          <h1 className="text-2xl font-semibold mb-4">
            Place information
          </h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="placename"
                className="block text-gray-600 mb-1"
              >
                Place name:
              </label>
              <input
                type="text"
                id="placename"
                name="placename"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-600 mb-1"
              >
                Address:
              </label>
              <textarea
                id="address"
                name="address"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="publish,private"
                className="block text-gray-600 mb-1"
              >
                Publish,Private:
              </label>
              <input
                type="text"
                id="publish,private"
                name="publish,private"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              />
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

            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

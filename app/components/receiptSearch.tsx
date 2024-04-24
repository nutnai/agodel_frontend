export default function Reciptsearch() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-indigo-700 p-6 rounded-lg shadow-md">
          <form className="flex flex-wrap sm:flex-nowrap items-center px-4 justify-between">
            <div className="flex flex-wrap sm:flex-nowrap gap-8 mr-4  ">
              <div className="w-full sm:w-auto">
                <label
                  htmlFor="roomnum"
                  className="block text-sm font-medium text-white "
                >
                  Room Number
                </label>
                <input
                  type="text"
                  id="roomnum"
                  name="roomnum"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  placeholder=""
                />
              </div>

              <div className="w-full sm:w-auto">
                <label
                  htmlFor="dates"
                  className="block text-sm font-medium text-white"
                >
                  Date Start
                </label>
                <input
                  type="date"
                  id="dates"
                  name="dates"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="w-full sm:w-auto">
                <label
                  htmlFor="datee"
                  className="block text-sm font-medium text-white"
                >
                  Date End
                </label>
                <input
                  type="date"
                  id="datee"
                  name="datee"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="w-full sm:w-auto">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-white"
                >
                  Room Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                >
                  <option value="single">
                    Single
                  </option>
                  <option value="double">
                    Double
                  </option>
                  <option value="suite">
                    Suite
                  </option>
                </select>
              </div>
            </div>

            <div className="w-full sm:w-auto ml-3 ">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

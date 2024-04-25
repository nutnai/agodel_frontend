export default function Placesearch() {
  return (
    <div className="container mx-auto py-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-900 p-6 rounded-lg shadow-md w-auto">
              <form className="flex flex-row sm:flex-nowrap items-center gap-4">
                <div className="flex flex-col sm:flex-nowrap items-center gap-4">
                  <div className="grid grid-cols-4 gap-6">
                    <div className="w-full sm:w-auto">
                      <label
                        htmlFor="keyword"
                        className="block text-sm font-medium  text-white"
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
                        htmlFor="numberOfPersons"
                        className="block text-sm font-medium text-white"
                      >
                        Number of
                        Persons
                      </label>
                      <input
                        type="number"
                        id="numberOfPersons"
                        name="numberOfPersons"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        min="1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="w-full sm:w-auto">
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-white"
                      >
                        Type
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
                    <div className="w-full sm:w-auto">
                      <label
                        htmlFor="pricemin"
                        className="block text-sm font-medium text-white"
                      >
                        Price min
                      </label>
                      <input
                        type="number"
                        id="pricemin"
                        name="pricemin"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        min="1"
                      />
                    </div>
                    <div className="w-full sm:w-auto">
                      <label
                        htmlFor="pricemax"
                        className="block text-sm font-medium text-white"
                      >
                        Price max
                      </label>
                      <input
                        type="number"
                        id="pricemax"
                        name="pricemax"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        min="1"
                      />
                    </div>
                  </div>
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
            </div>
          </div>
        </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8 flex">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-400 p-6 rounded-lg shadow-md">
              <form className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                <div className="w-full sm:w-auto">
                  <label
                    htmlFor="keyword"
                    className="block text-sm font-medium text-gray-700"
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
                    className="block text-sm font-medium text-gray-700"
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
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    Search
                  </button>
                </div>
                <div className="w-full sm:w-auto">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">
              Available Hotels
            </h2>
            <div>
              <div className="border border-gray-300 rounded-lg overflow-hidden flex  items-center mt-8">
                <img className="w-1/4 h-auto" />
                <div className="ml-4 flex gap-12 items-center justify-center">
                  <h2 className="text-xl font-semibold mb-2"></h2>
                  <p className="text-gray-600">
                    Score:{" "}
                  </p>
                  <p className="text-gray-600">
                    Price: $ per night
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

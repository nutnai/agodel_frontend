import Header from "../resource/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto p-4 min-h-screen bg-white w-full pt-14 px-10 sm:px-20 lg:px-40">
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10">
          <div className="flex flex-col justify-between border-solid rounded-lg bg-blue-500 p-5 mb-5 sm:mb-0 sm:pb-14 w-full sm:w-2/6 lg:w-1/3 xl:w-1/4">
            <div className="space-y-6">
              <div className="bg-white w-8/9 h-4 sm:h-6 md:h-8 lg:h-10 xl:h-12"></div>
              <div className="bg-white w-8/9 h-4 sm:h-6 md:h-8 lg:h-10 xl:h-12"></div>
              <div className="bg-white w-8/9 h-4 sm:h-6 md:h-8 lg:h-10 xl:h-12"></div>
            </div>
            <button
              type="submit"
              className="w-full h-12 mt-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-300 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Search
            </button>
          </div>
          <div className="container border-solid rounded-lg bg-yellow-200 p-5 w-full">
            {/* Your content here */}
          </div>
        </div>
      </div>
    </>
  );
}
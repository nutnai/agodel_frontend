import Header from "../resource/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto p-4 min-h-screen bg-white w-full px-20 ">
        <div className="flex space-x-32 ">
          <div className="flex-row border-solid rounded-lg bg-blue-500 p-5 mt-5 w-1/3 h-auto justify-center">
            <div className="bg-white w-8/9 h-1/6 pt-6 my-6"></div>
            <div className="bg-white w-8/9 h-1/6 pt-6 my-6"></div>
            <div className="bg-white w-8/9 h-1/6 pt-6 my-6"></div>
            <button
              type="submit"
              className=" flex justify-center w-8/9 h-1/6 pt-6 my-6 w-full border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-300 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Search
            </button>
          </div>
          <div className="container border-solid rounded-lg border-8 border-yellow-200 p-5 mt-5 w-2/3"></div>
        </div>
      </div>
    </>
  );
}

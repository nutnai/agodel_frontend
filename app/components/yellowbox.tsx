// components/YellowBox.js
const YellowBox = () => {
    return (
      <div className="bg-yellow-200 p-4  -mt-4 rounded-xl w-4/5 ml-44">
        <div className="flex justify-between">
        <input
          type="text"
          placeholder="Where are you going? ..."
          className="  p-2 mr-2 rounded-2xl w-64 content-center"
        />
        <input
          type="date"
          className=" p-2 mr-2 rounded-2xl w-64 content-center"
        />
        <input
          type="text"
          placeholder="How many people..."
          className=" p-2 rounded-2xl w-64 items-center"
        />
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
        

      </div>
      </div>
    
      
    );
  };
  
  export default YellowBox;
  
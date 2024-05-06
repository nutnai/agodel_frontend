// components/ReservedButton.js

import React, {
  useState,
  useEffect,
} from "react";

const ReservedButton = () => {
  const id = localStorage.getItem("id")
  const token = localStorage.getItem("login")
  const roomId = localStorage.getItem("roomId")
  const [isReserved, setIsReserved] =
    useState(false);
  const [disable, setDisable] =
    useState(false);
  useEffect(() => {
    if (
      localStorage.getItem("login") ===
      null
    ) {
      setDisable(true);
    }
    if (
      localStorage.getItem("login") ===
      "undefined"
    ) {
      setDisable(true);
    }
  });
  const [customer,setCustomer]=useState([])
  const [roomDetail, setRoomDetail] =
    useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "/api/room/getRoom",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
              'authorization': 'Bearer ' + token
          },
          body: JSON.stringify({
            roomId: roomId,
          }),
        }
      );
      const data =
        await response.json();
      setRoomDetail(data.room.roomType);
      console.log("data", data);
      console.log(data.room.place.name);
      window.localStorage.reload;
    } catch (error) {
      console.error(
        "Error fetching data:",
        error
      );
    }
  };
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(
          "/api/user/getCustomer",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
                'authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
              customerId: id,              
            }),
          }
        );
        
        const data =
          await response.json();
        if (!response.ok) {
          alert(data.message);
        }
        if(response.ok){
          console.log(data);
        console.log(data.customer);
        setCustomer(data.customer);
        console.log(customer);
        }
        
      } catch (error) {
        console.error(
          "Error fetching username:",
          error
        );
        // Handle error
      }
    };

    fetchUserInfo();
  }, []);
  const [date, setDate] = useState(
    JSON.parse(
      localStorage.getItem("date")
    )
  );

  const handleDateChange = (
    event: any
  ) => {
    const { name, value } =
      event.target;
    setDate({ ...date, [name]: value });
  };
  console.log(date.dateCheckIn);
  const toggleReserved = () => {
    setIsReserved((prev) => !prev);
  };

  const [isOpen, setIsOpen] =
    useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  // async function reserve() {  
  //   try {
  //     const response = await fetch(
  //       "/api/user/login",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type":
  //             "application/json",
  //         },
  //         body: JSON.stringify({
  //           roomId: roomId,
  //           dateCheckIn: date.dateCheckIn,
  //           dateCheckOut: date.dateCheckOut,
  //           dayCount:
  //        }),
  //       }
  //     );
  //     if (response.ok) {
  //       console.log("Login success");
  //       const data = await response.json();
  //       console.log(data);
  //       const dataId = data.id;
  //       console.log(data.id);
  //       console.log(data.token);
  //       console.log(typeof dataId);
  //       console.log(typeof data);
  //       localStorage.setItem("login", data.token);
  //       localStorage.setItem(
  //         "id",
  //         data.id
  //       );
  //       if (typeof dataId === 'string') {
  //         console.log(dataId);
  //         if (dataId.charAt(0) === "1") {
  //           localStorage.setItem(
  //             "role",
  //             "customer"
  //           );
  //         } else if (dataId.charAt(0) === "2") {
  //           localStorage.setItem(
  //             "role",
  //             "owner"
  //           );
  //         }
  //       } else {
  //         console.error("Data is not in the expected format or is empty.");
  //       }
        
        
  //       window.location.href = "/";
        
       
  //     }
  //     if (!response.ok) {
  //       console.log(response.json().then((data) => console.log(data)));
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  return (
    <div>
      <button
        onClick={toggleModal}
        disabled={disable}
        className={`flex items-center justify-center font-semibold w-24 h-12 rounded-2xl focus:outline-none text-indigo-900 ${
          isReserved
            ? "bg-yellow-300"
            : "bg-yellow-200"
        }`}
      >
        reserved
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white w-7/12 h-4/6 rounded-lg shadow-lg">
            <div className="mt-20 flex justify-between">
              <img
                className="w-44 h-32 ml-24"
                src="https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg"
                alt=""
              />
              <div className="mr-24">
                {roomDetail}
              </div>
            </div>
            <div className="mt-12 flex justify-between">
              <div className="ml-24"> 
                <div>{customer.firstname}</div>
                <div>{customer.lastname}</div>
                <div>
                  <input
                  id="dateCheckIn"
                  name="dateCheckIn"
                    type="date"
                    value={
                      date.dateCheckIn
                    }
                    onChange={
                      handleDateChange
                    }
                  ></input>
                </div>
                <div >
                  <input
                  id="dateCheckOut"
                  name="dateCheckOut"
                    type="date"
                    value={
                      date.dateCheckOut
                    }
                    onChange={
                      handleDateChange
                    }
                  ></input>
                </div>
              </div>
              <div className="mr-28">
                -
              </div>
            </div>

            <div className="mt-20 flex justify-end">
              <button
                onClick={toggleModal}
                className="mr-10 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Close
              </button>
              <button
                onClick={toggleModal}
                className="mr-10 bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservedButton;

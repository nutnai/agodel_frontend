import React, {
  useState,
  useEffect,
} from "react";

export default function Userinfo() {
  const [customer, setCustomer] =
    useState({
      customerId: "",
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
    });
    const token = localStorage.getItem("login");
  const [
    editableCustomer,
    setEditableCustomer,
  ] = useState({
    customerId: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });
  const id = localStorage.getItem("id");
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
        if (!response.ok) {
          throw new Error(
            "Failed to fetch username"
          );
        }
        const data =
          await response.json();
        console.log(data);
        console.log(data.customer);
        setCustomer(data.customer);
        setEditableCustomer(
          data.customer
        );
        console.log(customer);
        console.log(editableCustomer);
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
  const [isEditable, setIsEditable] =
    useState(false);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleCancel = () => {
    setIsEditable(false);
    setEditableCustomer(customer);
  };
  console.log(isEditable);
  const handleSubmit = async (
    e: any
  ) => {
    e.preventDefault();
    setIsEditable(false);
    setCustomer(editableCustomer); // Disable edit mode after saving
    try {
      const response = await fetch(
        "/api/user/editCustomer",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
              'authorization': 'Bearer ' + token
          },
          body: JSON.stringify({
            customerId: id,
            newFirstname:
              editableCustomer.firstname,
            newLastname:
              editableCustomer.lastname,
            newPhone:
              editableCustomer.phone,
            newEmail:
              editableCustomer.email,
          }),
        }
      );
      console.log(response);
      (response.json().then((data) => console.log(data)));
      alert("data has updated");
      console.log(
        "Data sent successfully:",
        response
      );
      window.location.reload();
    } catch (error) {
      console.error(
        "Error sending data:",
        error
      );
    } // Implement logic to save edited information
    // For example, send a PATCH or PUT request to update the customer info
  };
  const handleChange = (e: any) => {
    setEditableCustomer({
      ...editableCustomer,
      [e.target.name]: e.target.value,
    });
    console.log(
      "Editable Customer:",
      editableCustomer
    );
  };
  return (
    <>
      <div className="mx-auto p-4 min-h-screen bg-white w-full px-40">
        <div className="border-solid rounded-lg border-8 border-blue-200 p-5 mt-5">
          <h1 className="text-2xl font-semibold mb-4">
            User information
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-600 mb-1"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={
                  localStorage.getItem(
                    "username"
                  ) || ""
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                readOnly={true}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="firstname"
                className="block text-gray-600 mb-1"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                onChange={handleChange}
                value={
                  editableCustomer.firstname ||
                  ""
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                readOnly={!isEditable}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastname"
                className="block text-gray-600 mb-1"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={
                  editableCustomer.lastname ||
                  ""
                }
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                readOnly={!isEditable}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 mb-1"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={
                  editableCustomer.email ||
                  ""
                }
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                readOnly={!isEditable} // Toggle readOnly based on isEditable state
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-600 mb-1"
              >
                Phone Number:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={
                  editableCustomer.phone ||
                  ""
                }
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                readOnly={!isEditable}
              />
            </div>

            {!isEditable ? (
              <button
                type="button"
                onClick={handleEdit}
                className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-indigo-700"
              >
                Edit
              </button>
            ) : (
              <>
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-4 rounded-md mr-2 hover:bg-green-700 focus:outline-none focus:bg-indigo-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:bg-gray-700"
                >
                  Cancel
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

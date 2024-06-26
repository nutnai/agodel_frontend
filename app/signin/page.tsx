"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import {
  useState,
  useEffect,
} from "react";
export default function Signin() {
  const customerClick = () => {
    localStorage.setItem(
      "role",
      "customer"
    );
  };
  const [username, setUsername] =
    useState("");
  const [password, setPassword] =
    useState("");
  async function signin() {
    

    try {
      const response = await fetch(
        "/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );
      if (response.ok) {
        console.log("Login success");
        const data = await response.json();
        console.log(data);
        const dataId = data.id;
        console.log(data.id);
        console.log(data.token);
        console.log(typeof dataId);
        console.log(typeof data);
        localStorage.setItem("login", data.token);
        localStorage.setItem(
          "id",
          data.id
        );
        if (typeof dataId === 'string') {
          console.log(dataId);
          if (dataId.charAt(0) === "1") {
            localStorage.setItem(
              "role",
              "customer"
            );
          } else if (dataId.charAt(0) === "2") {
            localStorage.setItem(
              "role",
              "owner"
            );
          }
        } else {
          console.error("Data is not in the expected format or is empty.");
        }
        
        
        window.location.href = "/";
        
       
      }
      if (!response.ok) {
        console.log(response.json().then((data) => console.log(data)));
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 mb-24">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="space-y-6 ">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="email"
                      value={username}
                      onChange={(e) =>
                        setUsername(
                          e.target.value
                        )
                      }
                      required
                      className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) =>
                        setPassword(
                          e.target.value
                        )
                      }
                      required
                      className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <a href="/forgetPassword">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-1 mt-4  text-sm font-medium text-gray-400 underline hover:text-gray-600"
                  >
                    Forget password ?
                  </button>
                </a>
                
                <div  className="flex-row justify-center items-center">
                  <button
                    type="submit"
                    onClick={signin}
                    className="mb-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Login
                  </button>
                </div>
                <a href="/signup">
                  <button
                    onClick={
                      customerClick
                    }
                    type="submit"
                    className=" flex justify-center py-2 px-4 w-full border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign up
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

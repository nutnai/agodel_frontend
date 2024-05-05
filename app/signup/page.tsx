"use client";

import React, {
  useEffect,
  useState,
} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SignupModel from "./signupModel";

const signupModel = new SignupModel();
export default function Signup() {
  const [
    passwordMatch,
    setPasswordMatch,
  ] = useState(true);
  const [formData, setFormData] =
    useState(signupModel.getFormData());

  const [role, setRole] =
    useState(true);
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (
      formData.password !==
      formData.confirmpassword
    ) {
      setPasswordMatch(false);
      return; // Prevent form submission
    }
    await signupModel.signup();
  };
  
  useEffect(() => {
    if (
      localStorage.getItem("role") ===
      "owner"
    ) {
      signupModel.formData.type =
        "owner";
      setRole(false);
    }
    if (
      localStorage.getItem("role") ===
      "cutomer"
    ) {
      signupModel.formData.type = "customer";
      setRole(true);
    }
  });
useEffect(() => {
    if (
      localStorage.getItem("role") ===
      "owner"
    ) {
      signupModel.formData.type =
        "owner";
      setRole(false);
    }
    if (
      localStorage.getItem("role") ===
      "customer"
    ) {
      signupModel.formData.type = "customer";
      setRole(true);
    }
  }); 
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    signupModel.setFormData(
      name as keyof (typeof signupModel)["formData"],
      value
    );
    setFormData({
      ...formData,
      [name]: value,
    });
    setPasswordMatch(true);
  };
  console.log(signupModel.formData);
  return (
    <>
      
      <div className="bg-gray-100 min-h-screen">
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="ml-5 text-center text-3xl font-extrabold text-gray-900">
              Sign up your account
            </h2>
            {role && (
              <p className="ml-5 text-center text-3xl font-extrabold text-gray-900">
                {" "}
                for customer
              </p>
            )}
            {!role && (
              <p className="ml-5 text-center text-3xl font-extrabold text-gray-900">
                {" "}
                for owner
              </p>
            )}
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
              <a href="/signin">
                <div className="text-center mb-2">
                  <button className="mb-2 w-auto underline">
                    Back to signin
                  </button>
                </div>
              </a>
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
              >
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
                      value={
                        signupModel
                          .formData
                          .username
                      }
                      onChange={
                        handleChange
                      }
                      autoComplete="current-password"
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
                      value={
                        signupModel
                          .formData
                          .password
                      }
                      onChange={
                        handleChange
                      }
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirmpassword"
                      name="confirmpassword"
                      type="password"
                      value={
                        signupModel
                          .formData
                          .confirmpassword
                      }
                      onChange={
                        handleChange
                      }
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  {!passwordMatch && (
                    <p className="text-red-500 text-sm">
                      Passwords do not
                      match.
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="firstname"
                      name="firstname"
                      type="text"
                      value={
                        signupModel
                          .formData
                          .firstname
                      }
                      onChange={
                        handleChange
                      }
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      value={
                        signupModel
                          .formData
                          .lastname
                      }
                      onChange={
                        handleChange
                      }
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telephone Number
                  </label>
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      value={
                        signupModel
                          .formData
                          .phone
                      }
                      onChange={
                        handleChange
                      }
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={
                        signupModel
                          .formData
                          .email
                      }
                      onChange={
                        handleChange
                      }
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

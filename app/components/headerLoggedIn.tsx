// components/Header.js
"use client";
import React,{useState,useEffect} from 'react';
import Link  from 'next/link';

const HeaderLoggedIn = () => {
  const home = () => {
    localStorage.removeItem("search");
    localStorage.removeItem("roomsearch");
    localStorage.removeItem("currentPage");
    window.location.href = "/";
  };
  const [username,setUsername] = useState("");
  
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("login");
  useEffect(() => {
    if(localStorage.getItem("role") === "owner"){
      const fetchUsername = async () => {
        try {
          const response = await fetch('/api/user/getOwner', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'authorization': 'Bearer ' + token
            }, 
            body: JSON.stringify({ "ownerId": id })
          });
          if (!response.ok) {
            (response.json().then((data) => console.log(data)));
          }
          const data = await response.json();
          console.log(data);
          setUsername(data.owner.username);
          localStorage.setItem("username",data.owner.username)
        } catch (error) {
          console.error('Error fetching username:', error);
          // Handle error
        }
      };
  
      fetchUsername();
    }
    if (localStorage.getItem("role") === "customer") {
      const fetchUsername = async () => {
        try {
          const response = await fetch('/api/user/getCustomer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'authorization': 'Bearer ' + token
            }, 
            body: JSON.stringify({ "customerId": id })
          });
          const data = await response.json();
          if (!response.ok) {
            alert(data.message)
          }
          
          console.log(data);
          setUsername(data.customer.username);
          localStorage.setItem("username",data.customer.username)
        } catch (error) {
          console.error('Error fetching username:', error);
          // Handle error
        }
      };
  
      fetchUsername();
    }
    
  }, []);
    
  return (
    <header className="bg-blue-900 py-6 text-white flex justify-between">
      <div className="container">
      <Link href="/">
        <h1 className="text-3xl font-bold ml-7 cursor-pointer hover:underline">Agodel</h1>
      </Link>
      </div>
      <a href="/info">
      <div className="flex items-center pr-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/th/c/c1/Chulalongkorn_University_Official_Logo.svg" // Replace with your profile picture URL
          alt="Profile Picture"
          className="w-10 h-10 rounded-full mr-2"
        />
        <span className="text-white text-lg font-semibold">{username}</span>
      </div>
      </a>
    </header>
  );
};

export default HeaderLoggedIn;

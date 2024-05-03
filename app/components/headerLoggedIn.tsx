// components/Header.js
import React,{useState,useEffect} from 'react';

const HeaderLoggedIn = () => {
  const [username,setUsername] = useState("");
  const id = localStorage.getItem("id");
  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch('/api/user/getUserDetail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify({ "id": id })
        });
        if (!response.ok) {
          throw new Error('Failed to fetch username');
        }
        const data = await response.json();
        console.log(data);
        setUsername(data.username);
        localStorage.setItem("username",data.username)
      } catch (error) {
        console.error('Error fetching username:', error);
        // Handle error
      }
    };

    fetchUsername();
  }, []);
    
  return (
    <header className="bg-blue-900 py-6 text-white flex justify-between">
      <div className="container">
      <a href="/">
        <h1 className="text-3xl font-bold ml-7">Agodel</h1>
      </a>
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

// components/Header.js
import SignInButton from './signIn';
import Link  from 'next/link';
const Header = () => {
  const home = () => {
    localStorage.removeItem("search");
    localStorage.removeItem("roomsearch");
    localStorage.removeItem("currentPage");
    
  };
    return (
      <header className="bg-blue-900 py-6 text-white flex justify-between" >
      
      <Link  href="/" >
        <h1 className="text-3xl font-bold ml-7 cursor-pointer hover:underline">Agodel</h1>
      </Link>
        
       
       
        
          <SignInButton />
        
        
        
      </header>
    );
  };
  
  export default Header;
  
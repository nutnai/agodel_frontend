// components/Header.js
import SignInButton from './signIn';
const Header = () => {
  const home = () => {
    localStorage.removeItem("search");
    localStorage.removeItem("roomsearch");
    localStorage.removeItem("currentPage");
    window.location.href = "/";
  };
    return (
      <header className="bg-blue-900 py-6 text-white flex justify-between" >
      
      <a onClick={home}>
        <h1 className="text-3xl font-bold ml-7">Agodel</h1>
      </a>
        
       
       
        
          <SignInButton />
        
        
        
      </header>
    );
  };
  
  export default Header;
  
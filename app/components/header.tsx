// components/Header.js
import SignInButton from './signIn';
const Header = () => {
    return (
      <header className="bg-blue-900 py-6 text-white flex justify-between" >
      
      <a href="/">
        <h1 className="text-3xl font-bold ml-7">Agodel</h1>
      </a>
        
       
       
        
          <SignInButton />
        
        
        
      </header>
    );
  };
  
  export default Header;
  
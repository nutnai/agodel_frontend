// components/Header.js
import SignInButton from './signIn';
const Header = () => {
    return (
      <header className="bg-blue-500 py-6 text-white flex justify-between" >
        <h1 className="text-3xl font-bold ml-7">Agodel</h1>
       
       
        
          <SignInButton />
        
        
        
      </header>
    );
  };
  
  export default Header;
  
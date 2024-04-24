


"use client";
import Header from './components/header';
import BorderBox from './components/borderbox';
import YellowBox from './components/yellowbox';
import Footer from './components/footer';

const Home = () => {
  async function test(){
    const res = await fetch('picked-lab-guided.ngrok-free.app/user/1');
    console.log(res.body);
  }
  return (
    <div className='bg-white flex flex-col min-h-screen'>
      <Header />
      <BorderBox />
      <YellowBox />
      <div className='p-64'>
        {/* <button onClick={test}>Test</button> */}
      </div>

          
      <Footer />
    </div>
  );
};

export default Home;
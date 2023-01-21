import React, { useEffect } from 'react';


//import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

//import components
import Header from './components/Header';
import Hero from './components/Hero';



const App = () => {

  //aos init
  useEffect(() => {
    Aos.init({
      duration:2500,
      delay: 400,
    })
  })

  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
    </div>
  );  
};

export default App;

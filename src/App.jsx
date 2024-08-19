import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Hero from './Components/hero/hero';
const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}
export default App
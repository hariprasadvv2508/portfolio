import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/hero/hero';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App
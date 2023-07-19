import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Activaties from './Components/Activaties';
import Booking from './Components/Booking';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Topbar from './Components/Topbar';


function App() {
  return (

<div>
<Topbar/>
<Navbar/> 
<Hero/>
<Activaties/>
<Booking/>
<Gallery/>
<Contact/>
<Footer/>
</div>

  );
}

export default App;

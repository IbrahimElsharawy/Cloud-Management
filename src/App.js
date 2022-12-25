import React from "react";
import About from "./components/About";
import AllOne from "./components/AllOne";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Support from "./components/Support";


function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Support />
    <AllOne/>
    <Pricing/>
    
    </div>
  );
}

export default App;

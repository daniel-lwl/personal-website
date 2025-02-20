import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import TechStack from "./components/sections/TechStack";
import "./styles/global.css";

function App() {
    return (
      <div>
        <Navbar />
        <Hero />
        <TechStack />
      </div>
    );
  }
  
  export default App;
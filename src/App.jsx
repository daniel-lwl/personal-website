import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import "./styles/global.css";

function App() {
    return (
      <div>
        <Navbar />
        <Hero />
        <TechStack />
        <Projects />
      </div>
    );
  }
  
  export default App;
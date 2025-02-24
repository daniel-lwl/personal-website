import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Contacts from "./components/sections/Contacts"
import "./styles/global.css";

function App() {
    return (
      <div>
        <Navbar />
        <Hero />
        <TechStack />
        <Projects />
        <Contacts />
      </div>
    );
  }
  
  export default App;
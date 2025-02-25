import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Contacts from "./components/sections/Contacts"
import About from "./components/sections/About"; // Import the About page
import Footer from "./components/layout/Footer";
import "./styles/global.css";

function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <TechStack />
                <Projects />
                <Contacts />
              </div>
            }
          />
          {/* About Route */}
          <Route path="/about" element={<About />} />
        </Routes>
        <hr />
        <Footer />
      </Router>
    );
  }
  
  export default App;
import React, { useState, useEffect, useRef } from "react";
import "../../styles/Navbar.css"; //import the styling for the Navbar
import homeIcon from "../../assets/icons/Home Icon.svg"


function Navbar() {
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0); // Using useRef to persist the value across renders

    useEffect(() => {

        const handleScroll = () => {
            const currentScroll = document.documentElement.scrollTop; // Get current scroll position

            if (currentScroll > lastScrollY.current && currentScroll > 50) {
                setHidden(true); // Hide navbar when scrolling down
            } else {
                setHidden(false); // Show navbar when scrolling up
            }

            lastScrollY.current = currentScroll; // Update last known scroll position
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array ensures effect runs once after mount
    
    return (
        <nav className="navbar" style={{ top: hidden ? "-100px" : "20px" }}>
        <div className="navbar-container">
            {/* Navigation Links */}
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </div>
        </nav>
    );
}

export default Navbar;
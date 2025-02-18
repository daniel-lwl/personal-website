import React, { useState, useEffect } from "react";
import "../../styles/Navbar.css"; //import the styling for the Navbar
import homeIcon from "../../assets/icons/Home Icon.svg"

//TODO: Change the border on the home icon and add animations to the hovering of the links

function Navbar() {
    const [hidden, setHidden] = useState(false);


    useEffect(() => {
        let lastScrollY = window.scrollY;
    
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 50) {
                setHidden(true); // Hide when scrolling down
            } else {
                setHidden(false); // Show when scrolling up
            }
            lastScrollY = window.scrollY;
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <nav className="navbar" style={{ top: hidden ? "-100px" : "20px" }}>
        <div className="navbar-container">
            {/* Home Button as a Link */}
            <a href="#home" className="nav-home">
            <img src={homeIcon} alt="Home" />
            </a>

            {/* Navigation Links */}
            <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
            </ul>
        </div>
        </nav>
    );
}

export default Navbar;
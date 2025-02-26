import React, { useState, useEffect, useRef } from "react";
import "../../styles/Navbar.css"; //import the styling for the Navbar
import { Link } from "react-router-dom";
import homeIcon from "../../assets/icons/Home Icon.svg"

function Navbar() {
    const [hidden, setHidden] = useState(false); // Track navbar visibility
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Track mobile menu state
    const lastScrollY = useRef(0); // Store last scroll position
    
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setMobileMenuOpen(false); // Close mobile menu after clicking a link
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    useEffect(() => {
        const handleScrollEffect = () => {
          const currentScroll = document.documentElement.scrollTop;
      
          if (currentScroll > lastScrollY.current && currentScroll > 50) {           
            setHidden(true); // Hide navbar when scrolling down
          } else {
            setHidden(false); // Show navbar when scrolling up
          }
      
          lastScrollY.current = currentScroll; // Update last known scroll position
        };
      
        window.addEventListener("scroll", handleScrollEffect);
      
        return () => {
          window.removeEventListener("scroll", handleScrollEffect);
        };
    }, []);

    // Close mobile menu if window is resized to desktop size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [mobileMenuOpen]);

    return (
        <nav className="navbar" style={{ top: hidden ? "-100px" : "20px" }}>
            <div className="navbar-container">
                {/* Hamburger Button - only visible on mobile */}
                <button 
                    className="mobile-menu-btn" 
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation menu"
                >
                    <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </button>

                {/* Navigation Links */}
                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link onClick={() => handleScroll("pricing")}>Pricing</Link></li>
                    <li><Link onClick={() => handleScroll("projects")}>Projects</Link></li>
                    <li><Link onClick={() => handleScroll("contact")}>Contact Me</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
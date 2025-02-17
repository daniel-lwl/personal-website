import React from "react";
import "../../styles/Navbar.css"; //import the styling for the Navbar
import homeIcon from "../../assets/icons/Home Icon.svg"

//TODO: Change the border on the home icon and add animations to the hovering of the links

function Navbar(){
    return (
        <nav className ="navbar">
            <div className ="navbar-container">
                {/*Home Button*/}
                <div className ="home-button">
                    <img src={homeIcon} alt="Home" />
                </div>

                {/*Navigation Links*/}
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact me</a></li>
                </ul>

            </div>
        </nav>
    );

}

export default Navbar;
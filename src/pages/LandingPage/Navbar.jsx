import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        {/* Logo Section */}
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1736857243/Group_5_mr6lzp.png"
            alt="Logo"
          />
        </div>

        {/* Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Navigation Links */}
        <div className="nav-links-wrapper">
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            {/* Buttons Inside the Dropdown for Smaller Screens */}
            <div className="buttons">
              <Link to="/signIn">
                <button className="sign-in-btn">Sign In ↗</button>
              </Link>
              <Link to="/signUp">
                <button className="sign-up-btn">Sign Up ↗</button>
              </Link>
            </div>
            <li><a href="#">Features</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Testimonial</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Buttons on the Right End for Larger Screens */}
        <div className="buttons-right">
          <Link to="/signIn">
            <button className="sign-in-btn">Sign In ↗</button>
          </Link>
          <Link to="/signUp">
            <button className="sign-up-btn">Sign Up ↗</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

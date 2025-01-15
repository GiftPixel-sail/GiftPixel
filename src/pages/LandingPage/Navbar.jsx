import React from "react";

const Navbar = () => {
  const containerStyle = {
    position: "sticky", // Makes the navbar sticky
    top: "0", // Sticks to the top of the viewport
    zIndex: "1000", // Ensures the navbar stays above other elements
    backgroundColor: "rgba(242, 223, 216, 1)", // White background
    padding: "20px", // Padding around the navbar
  };

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 20px",
    backgroundColor: "#faf9f8",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow for a modern look
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#000",
  };

  const logoImageStyle = {
    marginRight: "8px",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "20px",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#000",
    fontSize: "16px",
    fontWeight: "normal",
  };

  const buttonsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const signInButtonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#000",
    background: "none",
    border: "none",
    cursor: "pointer",
  };

  const signUpButtonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#F96D5C",
    padding: "8px 15px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
  };

  const iconStyle = {
    fontSize: "12px",
  };

  return (
    <div style={containerStyle}>
      <div style={navbarStyle}>
        {/* Logo Section */}
        <div style={logoStyle}>
          <img
            src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1736857243/Group_5_mr6lzp.png"
            alt="Logo"
            style={logoImageStyle}
          />
        </div>

        {/* Navigation Links */}
        <ul style={navLinksStyle}>
          <li>
            <a href="#" style={linkStyle}>
              Features
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle}>
              About us
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle}>
              Testimonial
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle}>
              Contact US
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div style={buttonsStyle}>
          <button style={signInButtonStyle}>
            Sign In <span style={iconStyle}>↗</span>
          </button>
          <button style={signUpButtonStyle}>
            Sign Up <span style={iconStyle}>↗</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

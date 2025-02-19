import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logoImage from "/src/assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="d-flex justify-content-between align-items-center px-5 pt-3 position-absolute z-2 w-100">
        <div className="m-0 p-0 d-flex justify-content-center align-items-center gap-2">
          <img src={logoImage} alt="logo" id="spinning-logo" />
          <h2 className="fw-bold">
            <span className="text-danger">Fare</span>
            <span style={{ color: "#007BFF" }}>Bid</span>
          </h2>
        </div>
        <div className="w-50">
          <ul className="d-flex justify-content-between align-items-center m-0 p-0 list-unstyled">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

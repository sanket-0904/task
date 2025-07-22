import React from "react";
import "./Navbar.css";
import logo from "./../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="btn">
        <button>Enroll now</button>
        <i class="fa-solid fa-phone"></i>
      </div>
    </div>
  );
};

export default Navbar;

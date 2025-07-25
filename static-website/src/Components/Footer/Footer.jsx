import React from "react";
import "./Footer.css";
import logo from "./../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
        <div className="div-heading">
          <p>
            Unlock opportunities, transform your career, and achieve your goals.
          </p>
        </div>
      </div>

      <div className="footer-section">
        <h4>Get In Touch</h4>
        <p>beetledigital@gmail.com</p>
        <p>9878451125</p>
      </div>

      <div className="footer-section">
        <h4>Address</h4>
        <p>
          310, Shreeji Solitaire,
          <br />
          Khadakpada,
          <br />
          Kalyan(w) - 421301,
          <br />
          Maharashtra, India
        </p>
      </div>

      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-pinterest"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

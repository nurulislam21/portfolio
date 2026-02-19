import React from "react";
import logo1 from "./pic/logo.jpg";
import "./Footer.css"; // Make sure to import the CSS!

const Footer = () => {
  // PRO UPGRADE: Automatically gets the current year so you never have to manually update it
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area">
      <div className="container text-center">
        
        {/* Sleek Logo Section */}
        <div className="footer-logo">
          <img src={logo1} alt="Nurul Islam Noman" />
        </div>

        {/* Floating Social Links Section */}
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/nurulislam21/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/nurulislam21" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/NurulislamN21" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/nurulislamnoman.21/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>

        {/* Tech-Style Copyright Section */}
        <p className="footer-text">
          SYSTEM.OFFLINE // © {currentYear}. Engineered from scratch by <span className="primary_color">Nurul Islam Noman</span>. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
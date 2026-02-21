import React from "react";
import logo1 from "./pic/logo.jpg";
import "./Footer.css"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area">
      <div className="container text-center">
        
        <div className="footer-system-grid">
          
          {/* Left: System Status */}
          <div className="footer-telemetry">
            <span>SYS_UPTIME: 99.9%</span>
            <span>ENCRYPTION: RSA-2048</span>
            <span>DATALINK: SECURE</span>
          </div>

          {/* Center: Cyber Logo with Radar Rings */}
          <div className="footer-logo-wrapper">
            <div className="footer-logo">
              <img src={logo1} alt="Nurul Islam Noman" />
              <div className="ring-1"></div>
              <div className="ring-2"></div>
            </div>
          </div>

          {/* Right: Uplink Channels */}
          <div className="footer-social">
            <span className="uplink-text">UPLINK CHANNELS //</span>
            <div className="social-flex">
              <a href="https://www.linkedin.com/in/nurulislam21/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/nurulislam21" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.facebook.com/nurulislamnoman.21/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          
        </div>

        {/* Fading Tech Divider */}
        <div className="footer-divider"></div>

        <p className="footer-text">
          <span className="sys-offline">SYSTEM.SLEEP //</span> © {currentYear}. Engineered by <span className="primary_color">Nurul Islam Noman</span>. 
        </p>

      </div>
    </footer>
  );
};

export default Footer;
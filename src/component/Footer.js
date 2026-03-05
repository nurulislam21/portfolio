import React from "react";
import logo1 from "./pic/logo.jpg";
import "./Footer.css"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Function to smoothly scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer-area">
      <div className="container">
        
        <div className="footer-main-grid">
          
          {/* Column 1: Brand Identity & Telemetry */}
          <div className="footer-brand" data-aos="fade-right">
            <div className="footer-logo-wrapper">
              <div className="footer-logo">
                <img src={logo1} alt="Nurul Islam Noman" />
                <div className="ring-1"></div>
                <div className="ring-2"></div>
              </div>
              <div className="brand-text">
                <h2>NOMAN<span className="cursor-blink">_</span></h2>
                <p>Robotics & Embedded Systems</p>
              </div>
            </div>
            
            <div className="footer-telemetry mtop">
              <span>SYS_UPTIME: 99.9%</span>
              <span>DATALINK: SECURE [RSA-2048]</span>
              <span>BASE: DHAKA, BANGLADESH</span>
            </div>
          </div>

          {/* Column 2: System Directory (Quick Links) */}
          <div className="footer-links" data-aos="fade-up" data-aos-delay="100">
            <h3 className="footer-heading">DIRECTORY //</h3>
            <ul>
              <li><a href="#Home"><i className="fas fa-chevron-right"></i> 00. Home</a></li>
              <li><a href="#Expertise"><i className="fas fa-chevron-right"></i> 01. Expertise</a></li>
              <li><a href="#Projects"><i className="fas fa-chevron-right"></i> 03. Projects</a></li>
              <li><a href="#Milestones"><i className="fas fa-chevron-right"></i> 04. Milestones</a></li>
              <li><a href="#Contact"><i className="fas fa-chevron-right"></i> 05. Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Telemetry */}
          <div className="footer-contact" data-aos="fade-up" data-aos-delay="200">
            <h3 className="footer-heading">COMMS //</h3>
            <p><i className="fas fa-terminal"></i> noman1272003@gmail.com</p>
            <p><i className="fas fa-satellite-dish"></i> +880 1823-395901</p>
            <p><i className="fas fa-map-marker-alt"></i> Dhaka, Bangladesh</p>
          </div>

          {/* Column 4: Uplink & Controls */}
          <div className="footer-social" data-aos="fade-left" data-aos-delay="300">
            <h3 className="footer-heading">UPLINK //</h3>
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
            
            {/* Functional Back to Top Button */}
            <button className="back-to-top" onClick={scrollToTop} aria-label="Scroll to top">
              <i className="fas fa-arrow-up"></i> RETURN_TOP
            </button>
          </div>
          
        </div>

        {/* Fading Tech Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar: Copyright & Status */}
        <div className="footer-bottom d_flex">
          <p className="footer-text">
            <span className="sys-offline">SYSTEM.SLEEP //</span> © {currentYear}. Engineered by <span className="primary_color">Nurul Islam Noman</span>. 
          </p>
          <p className="footer-text terminal-status">
            STATUS: <span className="status-online">ONLINE</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
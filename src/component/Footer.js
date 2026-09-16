import React, { useState, useEffect } from "react";
import logo1 from "./pic/logo.jpg";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isLight, setIsLight] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme");
    if (savedTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      setIsLight(true);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsLight(false);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isLight;
    setIsLight(nextTheme);
    if (nextTheme) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("app-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("app-theme", "dark");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-main-grid">
          {/* Brand */}
          <div className="footer-brand" data-aos="fade-right">
            <div className="footer-logo-wrapper">
              <div className="footer-logo">
                <img src={logo1} alt="Nurul Islam Noman - Embedded & Robotics Engineer" />
              </div>
              <div className="brand-text">
                <h2>Nurul Islam Noman<span className="logo-dot">.</span></h2>
                <p>Embedded Systems &amp; Robotics Engineer</p>
              </div>
            </div>
            <p className="footer-bio-text">
              Engineering autonomous VTOL aircraft, custom embedded hardware, and deterministic firmware.
            </p>
          </div>

          {/* Links */}
          <div className="footer-links" data-aos="fade-up" data-aos-delay="100">
            <h3 className="footer-heading">Navigation</h3>
            <ul>
              <li><a href="#Home">Home</a></li>
              <li><a href="#Expertise">Expertise</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#Milestones">Milestones</a></li>
              <li><a href="#Contact">Get in Touch</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact" data-aos="fade-up" data-aos-delay="200">
            <h3 className="footer-heading">Contact</h3>
            <p><i className="far fa-envelope"></i> noman1272003@gmail.com</p>
            <p><i className="fas fa-phone-alt"></i> +880 1823-395901</p>
            <p><i className="fas fa-map-marker-alt"></i> Dhaka, Bangladesh</p>
          </div>

          {/* Socials & Top Button */}
          <div className="footer-social" data-aos="fade-left" data-aos-delay="300">
            <h3 className="footer-heading">Socials</h3>
            <div className="social-flex">
              <a href="https://www.linkedin.com/in/nurulislam21/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/nurulislam21" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.facebook.com/nurulislamnoman.21/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>

            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
              <i className="fas fa-arrow-up"></i> Back to Top
            </button>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom Bar with Theme Switch */}
        <div className="footer-bottom d_flex">
          <p className="footer-text">
            © {currentYear} Nurul Islam Noman. All rights reserved.
          </p>

          <div className="theme-toggle-wrapper">
            <span className="theme-label">
              <i className={isLight ? "fas fa-sun" : "fas fa-moon"}></i>
              {isLight ? "Light" : "Dark"}
            </span>
            <button
              className={`theme-switch ${isLight ? "light" : ""}`}
              onClick={toggleTheme}
              aria-label="Toggle light and dark mode"
            >
              <span className="theme-switch-slider"></span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
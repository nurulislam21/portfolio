import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // PRO FIX: Properly handling the scroll event in React
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup function to prevent memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container d_flex">
        
        {/* Sleek Logo Area */}
        <div className="logo">
          <h1 className="sub-title">
            <span className="primary_color">N</span>oman.
          </h1>
        </div>

        {/* Navigation */}
        <div className="navlink">
          <nav>
            <ul 
              className={isMobile ? "nav-links-mobile" : "link f_flex uppercase"} 
              onClick={() => setIsMobile(false)}
            >
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#skill">Skill</a></li>
              <li><a href="#blog">Achievements</a></li>
              <li><a href="#contact">Contact</a></li>
              <li>
                <a href="https://www.fiverr.com/nomanmugdo" target="_blank" rel="noopener noreferrer">
                  <button className="btn_shadow header-btn">Hire Me</button>
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="toggle" onClick={() => setIsMobile(!isMobile)} aria-label="Toggle menu">
            {isMobile ? (
              <i className="fas fa-times close"></i>
            ) : (
              <i className="fas fa-bars open"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
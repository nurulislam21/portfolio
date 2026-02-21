import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Optimized scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container d_flex header-container">
        
        {/* Terminal-Inspired Logo */}
        <div className="logo">
          <a href="#Home">
            <h1 className="sub-title">
              NOMAN<span className="cursor-blink">_</span>
            </h1>
          </a>
        </div>

        {/* Navigation */}
        <div className="navlink">
          <nav>
            <ul 
              className={isMobile ? "nav-links-mobile active" : "link f_flex uppercase"} 
              onClick={() => setIsMobile(false)}
            >
              <li><a href="#Home"><span className="nav-num">00.</span> Home</a></li>
              <li><a href="#Expertise"><span className="nav-num">01.</span> Expertise</a></li>
              <li><a href="#Resume"><span className="nav-num">02.</span> Resume</a></li>
              <li><a href="#Projects"><span className="nav-num">03.</span> Projects</a></li>
              <li><a href="#Milestones"><span className="nav-num">04.</span> Milestones</a></li>
              <li><a href="#Contact"><span className="nav-num">05.</span> Contact</a></li>
              
              {/* Pro LinkedIn Connect Button */}
              <li className="hire-btn-container">
                <a href="https://www.linkedin.com/in/nurulislam21/" target="_blank" rel="noopener noreferrer">
                  <button className="pro-btn">
                    <i className="fab fa-linkedin-in" style={{ marginRight: '8px', fontSize: '14px' }}></i> 
                    CONNECT //
                  </button>
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
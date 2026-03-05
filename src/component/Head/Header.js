import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobile]);

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container header-container">
          
          <div className="logo">
            <a href="#Home" aria-label="Go to Home">
              <h1 className="sub-title">
                NOMAN<span className="cursor-blink">_</span>
              </h1>
            </a>
          </div>

          <div className="navlink">
            <nav>
              <ul className={`link ${isMobile ? "active" : ""}`}>
                <li><a href="#Home" onClick={() => setIsMobile(false)}><span className="nav-num">00.</span> Home</a></li>
                <li><a href="#Expertise" onClick={() => setIsMobile(false)}><span className="nav-num">01.</span> Expertise</a></li>
                <li><a href="#Resume" onClick={() => setIsMobile(false)}><span className="nav-num">02.</span> Resume</a></li>
                <li><a href="#Projects" onClick={() => setIsMobile(false)}><span className="nav-num">03.</span> Projects</a></li>
                <li><a href="#Milestones" onClick={() => setIsMobile(false)}><span className="nav-num">04.</span> Milestones</a></li>
                <li><a href="#Contact" onClick={() => setIsMobile(false)}><span className="nav-num">05.</span> Contact</a></li>
                
                {/* UPDATED: Semantically correct button layout */}
                <li className="hire-btn-container">
                  <a 
                    href="https://www.linkedin.com/in/nurulislam21/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={() => setIsMobile(false)}
                    className="pro-btn"
                  >
                    <i className="fab fa-linkedin-in icon-spacing"></i> 
                    CONNECT //
                  </a>
                </li>
              </ul>
            </nav>

            <button 
              className="toggle" 
              onClick={() => setIsMobile(!isMobile)} 
              aria-expanded={isMobile}
              aria-label="Toggle navigation menu"
            >
              <i className={`fas ${isMobile ? "fa-times close" : "fa-bars open"}`}></i>
            </button>
          </div>
        </div>
      </header>

      <div 
        className={`mobile-overlay ${isMobile ? "active" : ""}`} 
        onClick={() => setIsMobile(false)}
        aria-hidden="true"
      ></div>
    </>
  );
};

export default Header;
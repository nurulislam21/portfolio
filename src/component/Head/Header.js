import React, { useState, useEffect, useCallback } from "react";
import "./header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isMobile ? "hidden" : "unset";
  }, [isMobile]);

  const closeMenu = () => setIsMobile(false);

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container header-container">
          
          <div className="logo">
            <a href="#Home" aria-label="Navigate to Home">
              <h1 className="sub-title">
                NOMAN<span className="cursor-blink">_</span>
              </h1>
            </a>
          </div>

          <div className="navlink">
            <nav aria-label="Main Navigation">
              <ul className={`link ${isMobile ? "active" : ""}`}>
                <li><a href="#Home" onClick={closeMenu}><span className="nav-num">00.</span> Home</a></li>
                <li><a href="#Expertise" onClick={closeMenu}><span className="nav-num">01.</span> Expertise</a></li>
                <li><a href="#Projects" onClick={closeMenu}><span className="nav-num">02.</span> Projects</a></li>
                <li><a href="#Resume" onClick={closeMenu}><span className="nav-num">03.</span> Resume</a></li>
                <li><a href="#Milestones" onClick={closeMenu}><span className="nav-num">04.</span> Milestones</a></li>
                <li><a href="#Contact" onClick={closeMenu}><span className="nav-num">05.</span> Contact</a></li>

                <li className="hire-btn-container">
                  <a
                    href="https://www.linkedin.com/in/nurulislam21/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="pro-btn"
                    aria-label="Connect on LinkedIn"
                  >
                    <i className="fab fa-linkedin-in icon-spacing" aria-hidden="true"></i>
                    CONNECT //
                  </a>
                </li>
              </ul>
            </nav>

            <button
              className="toggle"
              onClick={() => setIsMobile(!isMobile)}
              aria-expanded={isMobile}
              aria-controls="mobile-navigation"
              aria-label={isMobile ? "Close menu" : "Open menu"}
            >
              <i className={`fas ${isMobile ? "fa-times close" : "fa-bars open"}`} aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-overlay ${isMobile ? "active" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>
    </>
  );
};

export default Header;
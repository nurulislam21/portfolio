import React from "react";
import "./Home.css";
import noman1 from "../pic/isnoman.jpg";
import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import skill3 from "../pic/skill3.png";
import skill4 from "../pic/skill4.png";
import skill5 from "../pic/skill5.png";
import skill6 from "../pic/skill6.png";
import mypdf from '../pic/Nurul-Islam-Resume-12-2025.pdf';
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="hero" id="Home">
      <div className="noise-overlay"></div>
      
      {/* Premium Ambient Background Glows */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      {/* FIXED SPACING: Removed redundant '.top' classes to stop compounding margins */}
      <div className="container f_flex hero-layout">
        <div className="left">
          <div className="hero-main-header">
            
            <div className="system-status premium-glass" data-aos="fade-in">
              <span className="pulse-dot"></span>
              <span className="status-text">SYS_ACTIVE // R&D: SN21 VTOL v1.0</span>
            </div>
            
            <h1 className="hero-title">
              Nurul Islam <span className="premium-gradient-text">Noman</span>
            </h1>

            {/* Upgraded IDE-Style Terminal */}
            <div className="hero-typing premium-glass">
              <div className="ide-header">
                <div className="mac-btns">
                  <span className="mac-btn close"></span>
                  <span className="mac-btn minimize"></span>
                  <span className="mac-btn expand"></span>
                </div>
                <span className="ide-title">execute_task.sh</span>
              </div>
              <div className="ide-body">
                <span className="terminal-prefix">noman@robotics:~$</span>
                <span className="static-text"> ./initialize --focus </span>
                <span className="typing-text">
                  <Typewriter
                    words={[
                      "UAV & VTOL Flight Dynamics",        
                      "STM32 Embedded Firmware",       
                      "Altium High-Speed PCB Design",         
                      "SolidWorks Kinematic Modeling",    
                      "Autonomous Navigation Systems",     
                      "Hardware Systems Architecture"            
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}     
                    deleteSpeed={30}
                    delaySpeed={2000}
                  />
                </span>
              </div>
            </div>
          </div>
          
          {/* PRO ENGINEER REWRITE: Stronger, systems-level vocabulary */}
          <p className="hero-description">
            As a Systems & Robotics Engineer, I specialize in the architecture and deployment of autonomous aerial and ground vehicles. I manage the complete hardware lifecycle—from high-speed Altium PCB routing and multi-axis kinematic modeling to developing bare-metal embedded firmware. Leading R&D for international robotics competitions, my focus is bridging complex control theory with robust, production-ready physical systems.
          </p>
          
          <div className="hero_btn_main">
            <a href={mypdf} className="download-btn premium-btn" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-terminal"></i> <span>GET_FIRMWARE // Resume.pdf</span>
            </a>
          </div>

          <div className="hero_bottom d_flex">
            <div className="col_1">
              <h4>CONNECT //</h4>
              <div className="social-grid">
                <a href="https://www.linkedin.com/in/nurulislam21/" target="_blank" rel="noopener noreferrer" className="icon-btn premium-glass">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.facebook.com/nurulislamnoman.21/" target="_blank" rel="noopener noreferrer" className="icon-btn premium-glass">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/nurul_islam.noman/" target="_blank" rel="noopener noreferrer" className="icon-btn premium-glass">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/nurulislam21" target="_blank" rel="noopener noreferrer" className="icon-btn premium-glass">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>

            <div className="col_1">
              <h4>TECH_STACK //</h4>
              <div className="tools-grid">
                <a href="https://www.altium.com/" target="_blank" rel="noopener noreferrer" title="Altium Designer" className="tool-btn premium-glass">
                  <img src={skill3} alt="Altium" />
                </a>
                <a href="https://www.solidworks.com/" target="_blank" rel="noopener noreferrer" title="SOLIDWORKS" className="tool-btn premium-glass">
                  <img src={skill2} alt="SolidWorks" />
                </a>
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" title="Python" className="tool-btn premium-glass">
                  <img src={skill6} alt="Python" />
                </a>
                <a href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer" title="MATLAB" className="tool-btn premium-glass">
                  <img src={skill5} alt="MATLAB" />
                </a>
                <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer" title="TensorFlow" className="tool-btn premium-glass">
                  <img src={skill1} alt="TensorFlow" />
                </a>
                <a href="https://www.arduino.cc/" target="_blank" rel="noopener noreferrer" title="Microcontrollers" className="tool-btn premium-glass">
                  <img src={skill4} alt="Arduino" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="right">
          <div className="right_img_wrapper floating-anim">
            <div className="premium-holographic-glow"></div>
            
            <div className="tech-corner top-left"></div>
            <div className="tech-corner top-right"></div>
            <div className="tech-corner bottom-left"></div>
            <div className="tech-corner bottom-right"></div>

            <div className="right_img premium-glass-panel">
              <img src={noman1} alt="Nurul Islam Noman" className="pro-hero-img" />
              <div className="premium-scanline"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
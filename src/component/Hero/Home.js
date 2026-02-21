import React from "react";
import "./Home.css";
import hero from "../pic/realhero.jpg";
import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import skill3 from "../pic/skill3.png";
import skill4 from "../pic/skill4.png";
import skill5 from "../pic/skill5.png";
import skill6 from "../pic/skill6.png";
import mypdf from '../pic/Nurul-Islam-Resume-30-7-2024.pdf';
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="hero" id="Home">
      <div className="container f_flex top">

        <div className="left top">
          <div className="hero-main-header">
            
            <div className="system-status" data-aos="fade-in">
              <span className="pulse-dot"></span>
              <span className="status-text">SYS_ACTIVE // R&D: SN21 VTOL & TRANSIENT RESPONSE v1</span>
            </div>
            
            <h1 className="hero-title">
              Nurul Islam <span className="primary_color" data-text="Noman">Noman</span>
            </h1>

            <div className="hero-typing">
              <span className="terminal-prefix">root@noman:~$</span>
              <span className="static-text"> EXECUTE --task </span>
              <span className="typing-text">
                <Typewriter
                  words={[
                    "UAV & VTOL Flight Dynamics",        
                    "High-Speed PCB Architecture",       
                    "Kinematic Control Systems",         
                    "Embedded Firmware (STM32/RTOS)",    
                    "Precision Mechanical Modeling",     
                    "R&D Systems Engineering"            
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}     
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </span>
            </div>
          </div>
          
          <p className="hero-description">
            A versatile Robotics Engineer and Embedded Developer with a focus on the UAV and aerospace industries. I specialize in the full development lifecycle—from PCB design and mechanical modeling to software architecture and algorithm optimization. Holding a degree in Electrical and Electronics Engineering, I am committed to delivering robust, innovative solutions for the next generation of autonomous aerial systems.
          </p>
          
          <div className="hero_btn_main">
            <a href={mypdf} className="download-btn">
              <i className="fas fa-terminal"></i> GET_FIRMWARE // Resume.pdf
            </a>
          </div>

          <div className="hero_bottom d_flex">
            <div className="col_1">
              <h4>CONNECT //</h4>
              <div className="social-grid">
                <a href="https://www.linkedin.com/in/nurulislam21/" target="_blank" rel="noopener noreferrer">
                  <button className="btn_shadow icon-btn"><i className="fab fa-linkedin-in"></i></button>
                </a>
                <a href="https://www.facebook.com/nurulislamnoman.21/" target="_blank" rel="noopener noreferrer">
                  <button className="btn_shadow icon-btn"><i className="fab fa-facebook-f"></i></button>
                </a>
                <a href="https://www.instagram.com/nurul_islam.noman/" target="_blank" rel="noopener noreferrer">
                  <button className="btn_shadow icon-btn"><i className="fab fa-instagram"></i></button>
                </a>
                <a href="https://github.com/nurulislam21" target="_blank" rel="noopener noreferrer">
                  <button className="btn_shadow icon-btn"><i className="fa-brands fa-github"></i></button>
                </a>
              </div>
            </div>

            <div className="col_1">
              <h4>TECH_STACK //</h4>
              <div className="tools-grid">
                <a href="https://www.altium.com/" target="_blank" rel="noopener noreferrer" title="Altium Designer">
                  <button className="btn_shadow tool-btn"><img src={skill3} alt="Altium" /></button>
                </a>
                <a href="https://www.solidworks.com/" target="_blank" rel="noopener noreferrer" title="SOLIDWORKS">
                  <button className="btn_shadow tool-btn"><img src={skill2} alt="SolidWorks" /></button>
                </a>
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" title="Python">
                  <button className="btn_shadow tool-btn"><img src={skill6} alt="Python" /></button>
                </a>
                <a href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer" title="MATLAB">
                  <button className="btn_shadow tool-btn"><img src={skill5} alt="MATLAB" /></button>
                </a>
                <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer" title="TensorFlow">
                  <button className="btn_shadow tool-btn"><img src={skill1} alt="TensorFlow" /></button>
                </a>
                <a href="https://www.arduino.cc/" target="_blank" rel="noopener noreferrer" title="Microcontrollers">
                  <button className="btn_shadow tool-btn"><img src={skill4} alt="Arduino" /></button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Area with Pro Effects */}
        <div className="right">
          <div className="right_img_wrapper">
            <div className="holographic-glow"></div> {/* New: Background Glow */}
            <div className="tech-corner top-left"></div>
            <div className="tech-corner top-right"></div>
            <div className="right_img">
              <img src={hero} alt="Nurul Islam Noman" className="pro-hero-img" />
              <div className="scanline"></div> {/* New: Scanning Line */}
            </div>
            <div className="tech-corner bottom-left"></div>
            <div className="tech-corner bottom-right"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
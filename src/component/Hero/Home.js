import React from "react";
import "./Home.css";
// import noman from "../pic/noman.jpg"
// import noman1 from "../pic/noman.jpg"
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

        {/* --- Hero Image tactical HUD --- */}
        <div className="right_img_wrapper tactical-hud-container" data-aos="fade-up" data-aos-delay="300">

          {/* Base HUD Brackets - Standard */}
          <div className="hud-corner top-left"></div>
          <div className="hud-corner top-right"></div>
          <div className="hud-corner bottom-left"></div>
          <div className="hud-corner bottom-right"></div>

          {/* Tactical Data Overlays - Floating */}
          <div className="hud-label hud-top-left">VTOL_KINE</div>
          <div className="hud-label hud-top-right">STM32_FW_REV0.2</div>
          <div className="hud-label hud-bottom-left">PCB_ARC: COMPLETED</div>
          <div className="hud-label hud-bottom-right">LOC: 23.8° N / 90.4° E</div>

          <div className="right_img hero-sensor-feed">
            {/* Your *ORIGINAL* Photo */}
            <img src={noman1} alt="Nurul Islam Noman // UAV Engineering Lead" className="sensor-img" />

            {/* Animated HUD Overlays */}
            <div className="cyber-grid-overlay"></div> {/* NEW GRID ADDED */}
            <div className="scanline-laser"></div>
            <div className="vignette-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
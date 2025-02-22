import React from "react"
import "./Home.css"
import hero from "../pic/realhero.jpg"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import skill4 from "../pic/skill4.png"
import skill5 from "../pic/skill5.png"
import skill6 from "../pic/skill6.png"
import mypdf from '../pic/Nurul-Islam-Resume-30-7-2024.pdf';
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>HEY! MY NAME IS</h3>
            <h2>
              <span style={{ color: 'gray', fontWeight: 'bold' }}>Nurul Islam Noman</span>
            </h2>
            <h2>
              <span style={{ color: 'white', fontWeight: 'bold' }}>I SPECIALIZE IN </span>
              <Typewriter
                words={[
                  "Robotics & Autonomous Systems.",
                  "Mechanical Design & CAD Modeling.",
                  "PCB Design & Embedded Hardware.",
                  "Embedded Systems & IoT Solutions.",
                  "Advanced Research & Development.",
                  "Software Engineering & Algorithm Design.",
                  "Aerospace & UAV Technologies.",
                  "3D Printing & Rapid Prototyping.",
                  "Electronics Engineering & Circuit Design.",
                  "Technical Consulting & Innovation Strategy."
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <p>
              {/* I am an experienced Robotics Engineer, Embedded Systems Developer, and Software Engineer with a demonstrated history of working in the research and development industry. Skilled in Robotics, Embedded Systems, PCB Design, Mechanical Design, Software Development, and Algorithm Design. Strong engineering professional with a Bachelor of Science (B.Sc.) focused in Electical and Electronics Engineering. */}
              I am a highly skilled Robotics Engineer, Embedded Systems Developer, and Software Engineer with extensive experience in research and development, particularly within the aviation UAV sector. My expertise spans Robotics, Embedded Systems, PCB Design, Mechanical Design, Software Development, and Algorithm Design. Holding a Bachelor of Science (B.Sc.) in Electrical and Electronics Engineering, I am committed to delivering innovative engineering solutions that advance UAV and aerospace technologies.
            </p>
            <div className='hero_btn'>
              <a href={mypdf} download>
                <button className='btn_shadow'>Download CV</button>
              </a>
            </div>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <a href="https://www.linkedin.com/in/nurulislam21/" target="_blank" rel="noopener noreferrer">
                    <button className='btn_shadow'>
                      <i class='fab fa-linkedin-in'></i>
                    </button>
                  </a>
                  <a href="https://www.facebook.com/nurulislamnoman.21/" target="_blank" rel="noopener noreferrer">
                    <button className='btn_shadow'>
                      <i class='fab fa-facebook-f'></i>
                    </button>
                  </a>
                  <a href="https://www.instagram.com/nurul_islam.noman/" target="_blank" rel="noopener noreferrer">
                    <button className='btn_shadow'>
                      <i class='fab fa-instagram'></i>
                    </button>
                  </a>
                  <a href="https://github.com/nurulislam21" target="_blank" rel="noopener noreferrer">
                    <button className='btn_shadow'>
                      <i class='fa-brands fa-github'></i>
                    </button>
                  </a>
                </div>
              </div>

              <div className='col_1'>
                <h4>Which Tols I use</h4>
                <a href="https://www.altium.com/" target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill3} alt='' />
                  </button>
                </a>
                <a href="https://www.solidworks.com/" target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill2} alt='' />
                  </button>
                </a>
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill6} alt='' />
                  </button>
                </a>
                <a href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill5} alt='' />
                  </button>
                </a>
                <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill1} alt='' />
                  </button>
                </a>
                <a href="https://www.arduino.cc/" target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill4} alt='' />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Home

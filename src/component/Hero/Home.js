import React from "react"
import "./Home.css"
import hero from "../pic/realhero.jpg"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import skill4 from "../pic/skill4.png"
import skill5 from "../pic/skill5.png"
import skill6 from "../pic/skill6.png"
// import mypdf from '../pic/Nurul-Islam-Resume-30-7-2024.pdf';
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            {/* <h3>HEY! THIS IS</h3> */}
            <h1>
              <span style={{ color: 'gray', fontWeight: 'bold' }}>Nurul Islam Noman</span>
            </h1>
            {/* <h2>
              <span style={{ color: 'white', fontWeight: 'normal' }}> I'm a professional </span>
                <Typewriter words={[" Full Stack Robotics Engineer.", "  Auto CAD desiner.", " PCB desiner.", " Researcher.", " FREELANCER."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000}/>
            </h2> */}
            <h2>
              <span style={{ color: 'white', fontWeight: 'normal' }}>I'm a </span>
              <Typewriter
                words={["Robotics Engineer.", "Auto CAD Designer.", "PCB Designer.", "Researcher.", "Freelancer."]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p>I am a robotics professional with expertise in robotic control systems, machine learning, and software development, with a particular focus on aviation-related robotics. My work involves integrating hardware and software to develop innovative solutions for aerospace applications, including UAVs, autonomous systems, and advanced navigation technologies. Committed to advancing both robotics and aviation, I actively explore emerging methodologies and technologies to deliver impactful, cutting-edge results. I am eager to collaborate on challenging projects that drive technological innovation in these fields.
            </p>
            {/* <div className='hero_btn'>
              <a href={mypdf} download>
                <button className='btn_shadow'>Download CV</button>
              </a>
            </div> */}
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
      </section>
    </>
  )
}

export default Home

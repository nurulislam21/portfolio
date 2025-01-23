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
            <h3>HEY! THIS IS</h3>
            <h1>
              <span style={{ color: 'blue', fontWeight: 'bold' }}>Nurul Islam</span>
            </h1>
            <h2>
              <span style={{ color: 'black', fontWeight: 'bold' }}> I'm a</span>
                <Typewriter words={[" Full Stack Robotics Engineer.", "  Auto CAD desiner.", " PCB desiner.", " Researcher.", " FREELANCER."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000}/>
            </h2>
            <p>I like to introduce myself as a Full Stack Robotics Engineer, Researcher, an ROS developer. Loves teaching, travelling, photography and exploring new technologies in the field of robotics. After 5 years I want to see myself contributing actively in the field of Robotics.
              <br></br> My passion for robotics can be traced back to my schools days. Whether as a Leader of school science project team or a sole kid researcher exploring internet to know how electronic device, machine or a computer works, now I believe I had been on an engineering path from the very begining. 
              Now dreaming of a world where robots actually understand what they are doing. Developing the definitive tool that will make it happen.
            <p>Isn't it enough detail for you? You can read more bellow.</p>
            </p>
            <div className='hero_btn'>
            <a href= {mypdf} download>
              <button className='btn_shadow'>Download CV</button>
              </a>
            </div>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <a href="https://www.linkedin.com/in/nurulislam21/"target="_blank" rel="noopener noreferrer">
                    <button className='btn_shadow'>
                      <i class='fab fa-linkedin-in'></i>
                    </button>
                  </a>
                  <a href="https://www.facebook.com/nurulislamnoman.21/"target="_blank" rel="noopener noreferrer">
                    <button className='btn_shadow'>
                      <i class='fab fa-facebook-f'></i>
                    </button>
                    </a>
                  <a href="https://www.instagram.com/nurul_islam.noman/"target="_blank" rel="noopener noreferrer">
                    <button className='btn_shadow'>
                      <i class='fab fa-instagram'></i>
                    </button>
                  </a>
                  <a href="https://github.com/nurulislam21"target="_blank" rel="noopener noreferrer">
                    <button className='btn_shadow'>
                      <i class='fa-brands fa-github'></i>
                    </button>
                  </a>
                </div>
              </div>
              <div className='col_1'>
                <h4>Which Tols I use</h4>
                <a href="https://www.tensorflow.org/"target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill1} alt='' />
                  </button>
                </a>
                <a href="https://www.solidworks.com/"target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill2} alt='' />
                  </button>
                </a>
                <a href="https://www.altium.com/"target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill3} alt='' />
                  </button>
                </a>
                <a href="https://www.arduino.cc/"target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill4} alt='' />
                  </button>
                </a>
                <a href="https://www.mathworks.com/products/matlab.html"target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill5} alt='' />
                  </button>
                </a>
                <a href="https://www.python.org/"target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill6} alt='' />
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

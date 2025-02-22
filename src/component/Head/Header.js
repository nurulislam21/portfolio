import React, { useState } from "react"
import "./header.css"
// import logo from "../pic/logo.jpg"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
        <h1 className="sub-title">
            <span> N</span>
            oman.
        </h1>
          {/* <div className='logo'>
            <img src={logo} alt='' />
          </div> */}

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#features'>features</a>
              </li>
              <li>
                <a href='#portfolio'>portfolio</a>
              </li>
              <li>
                <a href='#resume'>resume</a>
              </li>
              <li>
                <a href='#skill'>skill</a>
              </li>
              {/* <li>
                <a href='#clients'>clients</a>
              </li> */}
              <li>
                <a href='#blog'>Achievements</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
                <a href="https://www.fiverr.com/nomanmugdo"target="_blank" rel="noopener noreferrer">
                  <button className='home-btn'>Hire Me</button>
                </a>
                {/* <button className='home-btn'>Hair Me</button> */}
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

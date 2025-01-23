import React from "react"
import logo1 from "./pic/logo.jpg"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img style={{ width: 50, height: 50}} src={logo1} alt=""/>
            {/* <img src={logo1} alt='' /> */}
          </div>
          <p>Copyright © 2024 Nurul Islam - I build stuff from scratch</p>
        </div>
      </footer>
    </>
  )
}

export default Footer

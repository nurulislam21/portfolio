// import React from "react"
// import logo1 from "./pic/logo.jpg"

// const Footer = () => {
//   return (
//     <>
//       <footer>
//         <div className='conatiner text-center top'>
//           <div className='img'>
//             <img style={{ width: 50, height: 50}} src={logo1} alt=""/>
//             {/* <img src={logo1} alt='' /> */}
//           </div>
//           <p>Copyright © 2025 Nurul Islam - I build stuff from scratch</p>
//         </div>
//       </footer>
//     </>
//   )
// }

// export default Footer
import React from "react";
import logo1 from "./pic/logo.jpg";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#282c34",
        color: "#fff",
        padding: "30px 0",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <div className="container text-center">
        {/* Logo Section */}
        <div className="img mb-3">
          <img
            style={{ width: "50px", height: "50px" }}
            src={logo1}
            alt="Logo"
          />
        </div>

        {/* Copyright Section */}
        <p className="mb-3">
          Copyright © 2025 Nurul Islam - I build stuff from scratch
        </p>

        {/* Social Links Section */}
        <div className="social-links mb-4">
          <a
            href="https://www.facebook.com/nurulislamnoman.21/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              margin: "0 10px",
              fontSize: "24px",
              transition: "transform 0.3s ease",
            }}
            className="social-icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com/NurulislamN21"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              margin: "0 10px",
              fontSize: "24px",
              transition: "transform 0.3s ease",
            }}
            className="social-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nurulislam21/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              margin: "0 10px",
              fontSize: "24px",
              transition: "transform 0.3s ease",
            }}
            className="social-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        {/* Additional Footer Text */}
        <p className="mb-0">
          Designed and built by Nurul Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

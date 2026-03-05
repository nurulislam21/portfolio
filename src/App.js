import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Preloader from "./component/Preloader"; 
import Header from "./component/Head/Header";
import Home from "./component/Hero/Home"; 
import Features from "./component/Features/Features";
import Portfolio from "./component/Portfolio/Portfolio";
import Resume from "./component/Resume/Resume";
import Skill from './component/Skill/Skill';
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer";

// Global styling imported last to apply root overrides
import "./index.css";
import "./App.css";
import Testimonial from "./component/Testimonial/Testimonial";
import CustomCursor from "./component/CustomCursor"; // Adjust path if needed
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // PRO FIX: Upgraded easing function for premium bouncy/smooth scroll animations
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic", 
        once: true,
        offset: 50,
      });
      AOS.refresh(); 
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="app-wrapper">
          <Header />
          <CustomCursor />
          <main className="main-content">
            <Home />
            <Features />
            <Portfolio />
            <Resume />
            <Skill />
            <Blog />
            <Testimonial/>
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
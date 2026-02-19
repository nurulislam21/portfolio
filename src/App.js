import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Preloader from "./component/Preloader"; // Adjust path if needed based on your folder structure
import Header from "./component/Head/Header";
import Home from "./component/Hero/Home"; 
import Features from "./component/Features/Features";
import Portfolio from "./component/Portfolio/Portfolio";
import Resume from "./component/Resume/Resume";
import Skill from './component/Skill/Skill';
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // PRO FIX: We use a dependency array [isLoading] to watch the preloader.
  useEffect(() => {
    // Only initialize animations AFTER the preloader is completely done
    if (!isLoading) {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 50,
      });
      // Force AOS to recalculate the page layout now that the DOM is visible
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
          
          <main className="main-content">
            <Home />
            <Features />
            <Portfolio />
            <Resume />
            <Skill />
            <Blog />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
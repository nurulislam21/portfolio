import React from "react";
import Header from "./component/Head/Header";
import Features from "./component/Features/Features";
import Home from "./component/Hero/Home";
import Portfolio from "./component/Portfolio/Portfolio";
import Resume from "./component/Resume/Resume";
import Skill from './component/Skill/Skill';
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Skill />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};
export default App;

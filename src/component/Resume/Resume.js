import React from "react";
import "./Resume.css";
import ResumeApi from "./ResumeApi";
import Card from "./Card";

const Resume = () => {
  // Helper function with added AOS animations
  const renderContent = (category, iconClass) => {
    return ResumeApi.filter((val) => val.category === category).map((val, index) => (
      // Staggered delay for the timeline nodes
      <div key={index} data-aos="fade-up" data-aos-delay={index * 150}>
        <Card
          title={val.title}
          year={val.year}
          rate={<i className={iconClass}></i>}
          desc={val.desc}
        />
      </div>
    ));
  };

  return (
    <section className="Resume top" id="resume">
      <div className="container">
        
        {/* Main Heading Animation */}
        <div className="heading text-center" data-aos="fade-up">
          <h4>7+ YEARS OF ENGINEERING & FREELANCE EXPERIENCE</h4>
          <h1>My Resume</h1>
        </div>

        <div className="content-section mtop d_flex">
          
          {/* Education Section - Slides in from the left */}
          <div className="left" data-aos="fade-right" data-aos-duration="1000">
            <div className="heading">
              <h1>Education</h1>
            </div>
            <div className="resume-timeline">
              {renderContent("education", "fa-solid fa-graduation-cap")}
            </div>
          </div>

          {/* Experience Section - Slides in from the right */}
          <div className="left" data-aos="fade-left" data-aos-duration="1000">
            <div className="heading">
              <h1>Experience</h1>
            </div>
            <div className="resume-timeline">
              {renderContent("experience", "fa-solid fa-award")}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Resume;
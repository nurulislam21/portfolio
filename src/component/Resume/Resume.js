import React from "react";
import "./Resume.css";
import ResumeApi from "./ResumeApi";
import Card from "./Card";

const Resume = () => {
  const renderContent = (category, iconClass) => {
    return ResumeApi.filter((val) => val.category === category).map((val, index) => (
      <div key={index} data-aos="fade-up" data-aos-delay={index * 150} data-aos-offset="100">
        <Card
          title={val.title}
          year={val.year}
          rate={<i className={iconClass}></i>}
          desc={val.desc}
          skills={val.skills} 
        />
      </div>
    ));
  };

  return (
    <section className="Resume top" id="Resume">
      <div className="container">
        
        <div className="heading text-center" data-aos="fade-up">
          <h4 className="section-subtitle" style={{ justifyContent: 'center' }}>SYSTEM LOGS // ACADEMIC & PROFESSIONAL TIMELINE</h4>
          <h1 className="section-title">Operational History</h1>
        </div>

        <div className="content-section mtop d_flex">
          
          {/* Education Timeline */}
          <div className="left" style={{ width: "50%" }}>
            <div className="heading" data-aos="fade-right">
              <h2 className="timeline-title">01. Academic Data</h2>
            </div>
            <div className="resume-timeline">
              {renderContent("education", "fas fa-microchip")}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="left" style={{ width: "50%" }}>
            <div className="heading" data-aos="fade-left">
              <h2 className="timeline-title">02. Field Experience</h2>
            </div>
            <div className="resume-timeline">
              {renderContent("experience", "fas fa-satellite-dish")}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Resume;
import React from "react";
import "./Features.css";
import data from "./Features-Api";
import Card from "./Card";

const Features = () => {
  return (
    <section className="features top" id="Expertise">
      <div className="container">

        <div className="heading" data-aos="fade-up">
          <h4>CORE COMPETENCIES</h4>
          <h1>Engineering Expertise</h1>
        </div>

        <div className="content grid">
          {data.map((val, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100} /* Slightly faster stagger */
              >
                <Card
                  index={index}
                  iconClass={val.iconClass}
                  title={val.title}
                  desc={val.desc}
                  specs={val.specs} 
                  tags={val.tags} 
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
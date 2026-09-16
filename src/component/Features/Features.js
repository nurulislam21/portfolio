import React from "react";
import "./Features.css";
import data from "./Features-Api";
import Card from "./Card";

const Features = () => {
  return (
    <section className="features top" id="Expertise">
      <div className="container">
        <div className="heading" data-aos="fade-up">
          <span className="section-subtitle">CORE DISCIPLINES</span>
          <h2 className="section-title">Engineering Capabilities</h2>
        </div>

        <div className="content grid">
          {data.map((val, index) => (
            <div
              key={val.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 80}
              className="card-wrapper"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import React, { useState } from "react";
import "./Portfolio.css";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const initialItems = 6; // Shows 2 rows of 3 initially

  // Reverse the data so recent entries appear first
  const reversedData = [...Portfolio_data].reverse();

  return (
    <section className="Portfolio top" id="Projects">
      <div className="container">
        
        <div className="heading" data-aos="fade-up">
          <h4 className="section-subtitle">HARDWARE & SOFTWARE R&D //</h4>
          <h1 className="section-title">Systems Portfolio</h1>
        </div>

        <div className="content grid">
          {reversedData.slice(0, showAll ? reversedData.length : initialItems).map(
            (item, index) => (
              <Card 
                key={index}
                image={item.image}
                category={item.category}
                totalLike={item.totalLike}
                title={item.title}
                description={item.description}
                techStack={item.techStack} /* <-- CRITICAL ADDITION */
                aosDelay={(index % 3) * 100} /* Staggers animations nicely per row */
              />
            )
          )}
        </div>

        <div className="text-center mtop" data-aos="fade-up">
          <button
            className="load-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "SHRINK REPOSITORY" : "ACCESS FULL REPOSITORY"}
            <i className={`fas ${showAll ? "fa-chevron-up" : "fa-chevron-down"} ml-10`} style={{ marginLeft: "10px" }}></i>
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Portfolio;
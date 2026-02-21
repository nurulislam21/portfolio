import React, { useState } from "react";
import "./Portfolio.css";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const initialItems = 6;

  // Reverse the data so recent entries appear first
  const reversedData = [...Portfolio_data].reverse();

  return (
    <section className="Portfolio top" id="Projects">
      <div className="container">
        
        <div className="heading text-center" data-aos="fade-up">
          <h4>VISIT MY PORTFOLIO AND LEAVE YOUR FEEDBACK</h4>
          <h1>My Projects</h1>
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
                aosDelay={index * 100} 
              />
            )
          )}
        </div>

        <div className="text-center mtop" data-aos="fade-up" data-aos-delay="300">
          <button
            className="btn_shadow load-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Projects"}
            <i className={`fas ${showAll ? "fa-chevron-up" : "fa-chevron-down"} ml-10`}></i>
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Portfolio;
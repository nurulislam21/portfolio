import React, { useState, useMemo } from "react";
import "./Portfolio.css";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";

const CATEGORIES = ["All", "Aviation", "Robotics", "PCB", "Hardware Design", "Prototype"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    const reversed = [...Portfolio_data].reverse();
    if (activeCategory === "All") return reversed;
    return reversed.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="Portfolio top" id="Projects">
      <div className="container">
        <div className="heading" data-aos="fade-up">
          <span className="section-subtitle">HARDWARE R&amp;D &amp; SYSTEMS</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Dynamic Category Filter Bar */}
        <div className="portfolio-filters" data-aos="fade-up" data-aos-delay="100">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Card Grid */}
        <div className="content grid">
          {filteredProjects.map((item, index) => (
            <Card
              key={item.id || index}
              image={item.image}
              category={item.category}
              totalLike={item.totalLike}
              title={item.title}
              description={item.description}
              techStack={item.techStack}
              aosDelay={(index % 3) * 60}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
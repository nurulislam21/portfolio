import React, { useState, useMemo } from "react";
import "./Blog.css"; 
import Card from "./Card";
import BlogApi from "./BlogApi";

const Blog = () => {
  const [showAll, setShowAll] = useState(false);
  const initialItems = 6;

  // Memoize reversed milestones so calculations are not redone on toggle
  const reversedBlog = useMemo(() => [...BlogApi].reverse(), []);

  const visibleItems = showAll ? reversedBlog : reversedBlog.slice(0, initialItems);

  return (
    <section className="Blog top" id="Milestones">
      <div className="container">
        <div className="heading" data-aos="fade-up">
          <span className="section-subtitle">AWARDS &amp; RECOGNITION</span>
          <h2 className="section-title">Competition Milestones</h2>
        </div>

        <div className="content grid">
          {visibleItems.map((val, index) => (
            <Card 
              key={val.id} 
              image={val.image} 
              ppimage={val.ppimage} 
              date={val.date} 
              title_one={val.title_one} 
              aosDelay={(index % 3) * 80} 
            />
          ))}
        </div>

        {reversedBlog.length > initialItems && (
          <div className="text-center mtop" data-aos="fade-up">
            <button
              className="load-more-btn"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show Fewer Milestones" : "View Complete Archive"}
              <i className={`fas ${showAll ? "fa-chevron-up" : "fa-chevron-down"}`} style={{ marginLeft: "8px" }}></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
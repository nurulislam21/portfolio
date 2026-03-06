import React, { useState } from "react";
import "./Blog.css"; 
import Card from "./Card";
import BlogApi from "./BlogApi";

const Blog = () => {
  const [showAll, setShowAll] = useState(false);
  const initialItems = 6;

  // Reverse the API data to show new achievements first
  const reversedBlog = [...BlogApi].reverse();

  return (
    <section className="Blog top" id="Milestones">
      <div className="container">
        
        <div className="heading" data-aos="fade-up">
          <h4 className="section-subtitle">MILESTONES & RECOGNITION //</h4>
          <h1 className="section-title">Verified Achievements</h1>
        </div>

        <div className="content grid">
          {reversedBlog.slice(0, showAll ? reversedBlog.length : initialItems).map((value, index) => {
            return (
              <Card 
                key={index} 
                image={value.image} 
                ppimage={value.ppimage} 
                date={value.date} 
                title_one={value.title_one} 
                aosDelay={(index % 3) * 100} 
              />
            );
          })}
        </div>

        {BlogApi.length > initialItems && (
          <div className="text-center mtop" data-aos="fade-up">
            <button
              className="load-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "COLLAPSE RECORDS" : "ACCESS FULL ARCHIVE"}
              <i className={`fas ${showAll ? "fa-chevron-up" : "fa-chevron-down"}`} style={{ marginLeft: "10px" }}></i>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Blog;
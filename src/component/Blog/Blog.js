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
        
        <div className="heading text-center" data-aos="fade-up">
          <h4>MILESTONES & RECOGNITION</h4>
          <h1>Awards & Achievements</h1>
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
                aosDelay={index * 100} 
              />
            );
          })}
        </div>

        {BlogApi.length > initialItems && (
          <div className="text-center mtop" data-aos="fade-up" data-aos-delay="300">
            <button
              className="btn_shadow load-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View All Achievements"}
              <i className={`fas ${showAll ? "fa-chevron-up" : "fa-chevron-down"} ml-10`}></i>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Blog;
import React from "react";

// Add 'tags' to the props
const Card = ({ image, title, desc, index, tags }) => {
  return (
    <div className="feature-card">
      <span className="card-number">0{index + 1}</span>
      
      <div className="card-icon">
        <img src={image} alt={title} />
      </div>
      
      <h2>{title}</h2>
      <p className="card-desc">{desc}</p>
      
      {/* --- PRO UPGRADE: Tech Stack Tags --- */}
      <div className="card-tags">
        {tags && tags.map((tag, i) => (
          <span key={i} className="tech-tag">{tag}</span>
        ))}
      </div>
      
      <a href="#portfolio" className="card-arrow" aria-label={`View my ${title} projects`}>
        <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  );
};

export default Card;
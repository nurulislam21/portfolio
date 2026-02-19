import React from "react";

const Card = ({ image, title, desc, index }) => {
  return (
    <div className="feature-card">
      {/* Visual Depth: Background index number */}
      <span className="card-number">0{index + 1}</span>
      
      <div className="card-icon">
        <img src={image} alt={title} />
      </div>
      
      <h2>{title}</h2>
      <p className="card-desc">{desc}</p>
      
      <a href="#portfolio" className="card-arrow" aria-label={`View my ${title} projects`}>
        <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  );
};

export default Card;
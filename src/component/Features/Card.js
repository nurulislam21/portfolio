import React from "react";

const Card = ({ iconClass, title, desc, specs, index, tags }) => {
  return (
    <div className="feature-card">
      {/* Top Status Bar Indicator */}
      <div className="card-status-bar">
        <span className="status-dot"></span>
        <span className="status-text">MODULE_0{index + 1} </span>
      </div>
      
      <div className="card-header d_flex">
        <div className="card-icon">
          <i className={iconClass}></i>
        </div>
        <span className="card-number">0{index + 1}</span>
      </div>
      
      <h2>{title}</h2>
      <p className="card-desc">{desc}</p>
      
      {/* --- PRO UPGRADE: Technical Specs List --- */}
      <ul className="tech-specs-list">
        {specs && specs.map((spec, i) => (
          <li key={i}><i className="fas fa-angle-right"></i> {spec}</li>
        ))}
      </ul>
      
      {/* Tech Stack Tags */}
      <div className="card-tags">
        {tags && tags.map((tag, i) => (
          <span key={i} className="tech-tag">{tag}</span>
        ))}
      </div>
      
      <a href="#Projects" className="card-arrow" aria-label={`View my ${title} projects`}>
        <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  );
};

export default Card;
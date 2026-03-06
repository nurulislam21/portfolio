import React from "react";

const Card = ({ iconClass, title, desc, specs, index, tags }) => {
  return (
    <div className="feature-card">
      {/* Corner targeting brackets for the hardware aesthetic */}
      <div className="card-bracket top-left"></div>
      <div className="card-bracket top-right"></div>
      <div className="card-bracket bottom-left"></div>
      <div className="card-bracket bottom-right"></div>

      <div className="card-content">
        
        {/* Top Status Bar Indicator */}
        <div className="card-status-bar">
          <div className="status-indicator">
            <span className="status-dot active-blink"></span>
          </div>
          <span className="status-text">SYS_MOD_0{index + 1} </span>
        </div>
        
        <div className="card-header d_flex">
          <div className="card-icon">
            <i className={iconClass}></i>
          </div>
          <span className="card-number">0{index + 1}</span>
        </div>
        
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">{desc}</p>
        
        {/* Technical Specs List */}
        <ul className="tech-specs-list">
          {specs && specs.map((spec, i) => (
            <li key={i}>
              <span className="spec-chevron">&gt;</span> {spec}
            </li>
          ))}
        </ul>
        
        {/* Tech Stack Tags */}
        <div className="card-tags">
          {tags && tags.map((tag, i) => (
            <span key={i} className="tech-tag">{tag}</span>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Card;
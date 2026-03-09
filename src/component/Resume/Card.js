import React from "react";

const Card = (props) => {
  return (
    <div className="resume-card">
      {/* Hardware Targeting Brackets */}
      <div className="card-bracket top-left"></div>
      <div className="card-bracket bottom-right"></div>
      
      <div className="title_content">
        <div className="title">
          {/* Dynamic System Log Badge generated from the first word of the year string */}
          <div className="sys-log-badge">LOG_{props.year.split(" ")[0]} //</div>
          <h2>{props.title}</h2>
          <span className="year-tag">{props.year}</span>
        </div>
        <div className="rate">
          <div className="icon-badge">{props.rate}</div>
        </div>
      </div>
      
      {props.desc && (
        <>
          <div className="tech-divider"></div>
          <p className="card-desc">{props.desc}</p>
        </>
      )}

      {/* Renders Tech Stack Badges directly inside the card */}
      {props.skills && (
        <div className="resume-tags">
          {props.skills.map((skill, index) => (
            <span key={index} className="resume-tag">
              <span className="tag-chevron">&gt;</span> {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
import React from "react";

const Card = (props) => {
  return (
    <div className="resume-card">
      <div className="title_content d_flex">
        <div className="title">
          <h2>{props.title}</h2>
          <span>{props.year}</span>
        </div>
        <div className="rate">
          <div className="icon-badge">{props.rate}</div>
        </div>
      </div>
      
      {props.desc && (
        <>
          <div className="tech-divider"></div>
          <p>{props.desc}</p>
        </>
      )}

      {/* --- PRO UPGRADE: Tech Stack Badges --- */}
      {props.skills && (
        <div className="resume-tags">
          {props.skills.map((skill, index) => (
            <span key={index} className="resume-tag">{skill}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
import React from "react";

const Card = (props) => {
  return (
    <div className="resume-card box_shodow">
      <div className="title_content d_flex">
        <div className="title">
          <h2>{props.title}</h2>
          <span>{props.year}</span>
        </div>
        <div className="rate">
          {/* Changed from a button to a sleek icon badge */}
          <div className="icon-badge">{props.rate}</div>
        </div>
      </div>
      
      {/* Conditionally render the HR and Description only if desc exists */}
      {props.desc && (
        <>
          <hr />
          <p>{props.desc}</p>
        </>
      )}
    </div>
  );
};

export default Card;
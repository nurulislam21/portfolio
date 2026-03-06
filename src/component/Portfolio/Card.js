import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Card = ({ image, category, totalLike, title, description, techStack, aosDelay }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [modal]);

  return (
    <>
      <div
        className="portfolio-card"
        onClick={toggleModal}
        data-aos="fade-up"
        data-aos-delay={aosDelay}
      >
        <div className="img">
          <img src={image} alt={title} loading="lazy" />
          <div className="img-overlay">
            <span>INSPECT_MODULE //</span>
          </div>
        </div>
        
        <div className="category">
          <span className="cat-badge">{category}</span>
          <label className="likes">
            <i className="fas fa-microchip"></i> UID-{totalLike}
          </label>
        </div>
        
        <div className="title">
          <h2>{title}</h2>
        </div>

        {/* PRO UPGRADE: Displaying the Tech Stack directly on the card */}
        <div className="card-tech-stack">
          {techStack && techStack.map((tech, index) => (
            <span key={index} className="stack-tag">{tech}</span>
          ))}
        </div>
      </div>

      {modal && ReactDOM.createPortal(
        <div className="modal-wrapper">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">

            <button className="close-modal" onClick={toggleModal} aria-label="Close Modal">
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-body">
              <div className="modal-img">
                <img src={image} alt={title} />
              </div>
              
              <div className="modal-text">
                <span className="cat-badge system-badge">SPEC_FILE // {category}</span>
                <h1>{title}</h1>
                <p>{description || "Detailed telemetry data is currently being updated in the central repository."}</p>

                {/* PRO UPGRADE: Formatted Tech Stack in the Modal */}
                {techStack && (
                  <div className="modal-tech-list">
                    {techStack.map((tech, index) => (
                       <span key={index}>&gt; {tech}</span>
                    ))}
                  </div>
                )}

                <div className="modal-actions">
                  <a
                    href="https://github.com/nurulislam21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pro-btn outline-btn"
                  >
                    <i className="fas fa-code-branch"></i> REPOSITORY
                  </a>
                  {/* You can change this link to an actual schematic PDF later */}
                  <button className="pro-btn active-btn" onClick={toggleModal}>
                    <i className="fas fa-check"></i> ACKNOWLEDGE
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Card;
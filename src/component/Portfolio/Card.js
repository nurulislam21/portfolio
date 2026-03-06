import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Card = ({ image, category, totalLike, title, description, aosDelay }) => {
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
        <div className="category d_flex">
          <span className="cat-badge">{category}</span>
          <label className="likes">
            <i className="fas fa-microchip"></i> UID-{totalLike}
          </label>
        </div>
        <div className="title">
          <h2>{title}</h2>
          {/* Replaced button with a sleeker span for the arrow indicator */}
          <span className="arrow-btn" aria-label="View Specs">
            <i className="fas fa-arrow-right" style={{ color: "var(--accent-primary)" }}></i>
          </span>
        </div>
      </div>

      {modal && ReactDOM.createPortal(
        <div className="modal-wrapper">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">

            <button className="close-modal" onClick={toggleModal}>
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-body d_flex">
              <div className="modal-img left">
                <img src={image} alt={title} />
                <div className="tech-corner top-left"></div>
                <div className="tech-corner bottom-right"></div>
              </div>
              <div className="modal-text right">
                <span className="cat-badge system-badge">SPEC_FILE // {category}</span>
                <h1>{title}</h1>
                <p>{description || "Detailed project specifications and telemetry data are currently being updated in the central repository."}</p>

                <div className="modal-actions mtop">
                  {/* Semantic Fix: Applied outline-btn directly to the anchor tag */}
                  <a
                    href="https://github.com/nurulislam21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pro-btn outline-btn"
                  >
                    <i className="fas fa-code-branch"></i> REPOSITORY
                  </a>
                  <button className="pro-btn active-btn">
                    <i className="fas fa-file-pdf"></i> SCHEMATICS
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
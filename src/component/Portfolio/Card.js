import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom"; // PRO UPGRADE: Required for Portals

const Card = ({ image, category, totalLike, title, description, aosDelay }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // Lock body scroll when modal is open
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
      {/* The Grid Card - Now handles its own AOS animation! */}
      <div 
        className="box box_shodow portfolio-card" 
        onClick={toggleModal}
        data-aos="fade-up" 
        data-aos-delay={aosDelay}
      >
        <div className="img">
          <img src={image} alt={title} />
        </div>
        <div className="category d_flex">
          <span className="cat-badge">{category}</span>
          <label className="likes">
            <i className="far fa-heart"></i> {totalLike}
          </label>
        </div>
        <div className="title">
          <h2>{title}</h2>
          <button className="arrow-btn" aria-label="View Project Details">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* PRO UPGRADE: React Portal teleports the modal out of the grid to prevent CSS bugs */}
      {modal && ReactDOM.createPortal(
        <div className="modal-wrapper">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content box_shodow">
            
            <button className="close-modal btn_shadow" onClick={toggleModal}>
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-body d_flex">
              <div className="modal-img left">
                <img src={image} alt={title} />
              </div>
              <div className="modal-text right">
                <span className="cat-badge">Project Specs // {category}</span>
                <h1>{title}</h1>
                <p>{description || "Detailed project specifications and documentation are currently being updated."}</p>
                
                <div className="button f_flex mtop modal-actions">
                  <button className="btn_shadow">
                    LIKE THIS <i className="far fa-thumbs-up"></i>
                  </button>
                  <button className="btn_shadow active-btn">
                    VIEW REPO <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>,
        document.body // This is where the portal drops the HTML
      )}
    </>
  );
};

export default Card;
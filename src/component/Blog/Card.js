import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom"; // PRO UPGRADE: Required for Portals

const Card = (props) => {
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
      {/* The Main Plaque Card - Now handles its own AOS animation! */}
      <div 
        className="box box_shodow achievement-card" 
        onClick={toggleModal}
        data-aos="fade-up"
        data-aos-delay={props.aosDelay}
      >
        <div className="img">
          <img src={props.image} alt={props.title_one} />
        </div>
        <div className="category d_flex">
          <span className="date-badge">{props.date}</span>
        </div>
        <div className="title">
          <h2>{props.title_one}</h2>
          <button className="arrow-btn" aria-label="View Certificate">
            <i className="fas fa-search-plus"></i>
          </button>
        </div>
      </div>

      {/* PRO UPGRADE: React Portal teleports the modal to the body to prevent grid/transform bugs */}
      {modal && ReactDOM.createPortal(
        <div className="modal-wrapper">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content box_shodow achievement-modal">
            
            <button className="close-modal btn_shadow" onClick={toggleModal}>
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-body">
              <span className="date-badge">Event Date // {props.date}</span>
              <h1 className="modal-title">{props.title_one}</h1>
              
              <div className="modal-img-full">
                <img src={props.ppimage} alt={props.title_one} />
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
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom"; 

const Card = (props) => {
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
        className="achievement-card" 
        onClick={toggleModal}
        data-aos="fade-up"
        data-aos-delay={props.aosDelay}
      >
        <div className="img">
          <img src={props.image} alt={props.title_one} />
          {/* Moved overlay here so it sits on top of the image properly */}
          <div className="img-overlay gold-overlay">
            <span>VERIFY_RECORD //</span>
          </div>
        </div>
        <div className="category d_flex">
          <span className="date-badge"><i className="far fa-clock"></i> {props.date}</span>
        </div>
        <div className="title">
          <h2>{props.title_one}</h2>
          {/* Changed from button to span to avoid semantic errors */}
          <span className="gold-arrow" aria-label="View Certificate">
            <i className="fas fa-certificate"></i>
          </span>
        </div>
      </div>

      {modal && ReactDOM.createPortal(
        <div className="modal-wrapper">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content achievement-modal">
            
            <button className="close-modal gold-close" onClick={toggleModal}>
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-body text-center">
              <span className="date-badge badge-large">RECORD TIMESTAMP // {props.date}</span>
              <h1 className="modal-title">{props.title_one}</h1>
              
              <div className="modal-img-full">
                <div className="tech-corner gold-corner top-left"></div>
                <div className="tech-corner gold-corner bottom-right"></div>
                <img src={props.ppimage} alt={props.title_one} />
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
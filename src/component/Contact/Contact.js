import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import contact1 from './contract.jpg'; 
import './Contact.css';

const Contact = () => {
  const [data, setData] = useState({
    fullname: '', phone: '', email: '', subject: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevVal) => ({ ...prevVal, [name]: value }));
  };

  const formSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const templateParams = {
      from_name: data.fullname, from_phone: data.phone, 
      from_email: data.email, subject: data.subject, message: data.message,
    };

    emailjs
      .send(
        'service_9fb85bs', 'template_vm3tyl2', templateParams, '25VbxUozexc7-MGnZ'
      )
      .then(
        (response) => {
          alert('SYSTEM MSG // Transmission Successful. I will process your request shortly.');
          setData({ fullname: '', phone: '', email: '', subject: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          alert('SYSTEM ERROR // Transmission Failed. Please check your connection.');
          console.error('Error sending message: ', error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="Contact top" id="contact">
      <div className="container">
        
        <div className="heading text-center" data-aos="fade-up">
          <h4>SECURE COMM CHANNEL</h4>
          <h1>Initialize Contact</h1>
        </div>

        <div className="content d_flex mtop contact-grid">
          
          {/* Left Section: Info Panel */}
          <div className="left tech-panel" data-aos="fade-right">
            <div className="img">
              <img src={contact1} alt="Nurul Islam Noman" />
              <div className="img-overlay scanline"></div>
            </div>
            <div className="details">
              <h1>Nurul Islam Noman</h1>
              <p className="title-tag">Robotics & Embedded Systems Lead</p>
              <p className="desc">Available for freelance PCB architecture, custom firmware development, and full-time engineering roles. Initiate contact below or via secure social links.</p>
              
              <div className="contact-info">
                <p><i className="fas fa-satellite-dish"></i> +8801823395901</p>
                <p><i className="fas fa-terminal"></i> noman1272003@gmail.com</p>
              </div>

              <div className="social-connect mtop">
                <span>ESTABLISH UPLINK //</span>
                <div className="button f_flex">
                  <a href="https://www.linkedin.com/in/nurulislam21/" target="_blank" rel="noopener noreferrer">
                    <button className="pro-btn icon-btn"><i className="fab fa-linkedin-in"></i></button>
                  </a>
                  <a href="https://www.facebook.com/nurulislamnoman.21/" target="_blank" rel="noopener noreferrer">
                    <button className="pro-btn icon-btn"><i className="fab fa-facebook-f"></i></button>
                  </a>
                  <a href="https://www.instagram.com/nurul_islam.noman/" target="_blank" rel="noopener noreferrer">
                    <button className="pro-btn icon-btn"><i className="fab fa-instagram"></i></button>
                  </a>
                  <a href="https://github.com/nurulislam21" target="_blank" rel="noopener noreferrer">
                    <button className="pro-btn icon-btn"><i className="fa-brands fa-github"></i></button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Terminal Form */}
          <div className="right tech-panel" data-aos="fade-left">
            <form onSubmit={formSubmit} className="contact-form">
              
              <div className="f_flex input-row">
                <div className="input-group">
                  <label>OPERATOR NAME // </label>
                  <input type="text" name="fullname" value={data.fullname} onChange={InputEvent} required className="tech-input" />
                </div>
                <div className="input-group">
                  <label>COMMS FREQUENCY (PHONE) // </label>
                  <input type="tel" name="phone" value={data.phone} onChange={InputEvent} required className="tech-input" />
                </div>
              </div>

              <div className="input-group">
                <label>RETURN ADDRESS (EMAIL) // </label>
                <input type="email" name="email" value={data.email} onChange={InputEvent} required className="tech-input" />
              </div>

              <div className="input-group">
                <label>QUERY SUBJECT // </label>
                <input type="text" name="subject" value={data.subject} onChange={InputEvent} required className="tech-input" />
              </div>

              <div className="input-group">
                <label>DATA PACKET (MESSAGE) // </label>
                <textarea name="message" value={data.message} onChange={InputEvent} rows="5" required className="tech-input"></textarea>
              </div>

              <button type="submit" className="pro-btn active-btn submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>TRANSMITTING <i className="fas fa-circle-notch fa-spin"></i></span>
                ) : (
                  <span>EXECUTE // SEND_DATA <i className="fas fa-chevron-right"></i></span>
                )}
              </button>
              
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
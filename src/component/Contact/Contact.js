import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import contact1 from './contract.jpg'; // Make sure this path is correct
import './Contact.css';

const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  };

  const formSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const templateParams = {
      from_name: data.fullname,
      from_phone: data.phone,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    };

    emailjs
      .send(
        'service_9fb85bs',    // Your Service ID
        'template_vm3tyl2',   // Your Template ID
        templateParams,
        '25VbxUozexc7-MGnZ'   // Your Public Key
      )
      .then(
        (response) => {
          alert('SYSTEM MSG // Message sent successfully! I will get back to you soon.');
          setData({ fullname: '', phone: '', email: '', subject: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          alert('SYSTEM ERROR // Failed to send the message. Please try again.');
          console.error('Error sending message: ', error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="Contact top" id="contact">
      <div className="container">
        
        <div className="heading text-center">
          <h4>COMMUNICATION CHANNEL OPEN</h4>
          <h1>Contact Me</h1>
        </div>

        <div className="content d_flex mtop contact-grid">
          
          {/* Left Section: Info */}
          <div className="left box_shodow">
            <div className="img">
              <img src={contact1} alt="Nurul Islam Noman" />
            </div>
            <div className="details">
              <h1>Nurul Islam Noman</h1>
              <p className="title-tag">Robotics Engineer & Embedded Developer</p>
              <p className="desc">I am available for freelance engineering work, PCB design, and full-time opportunities. Connect with me via my social media or call me directly.</p>
              
              <div className="contact-info">
                <p><i className="fas fa-phone-alt"></i> +8801823395901</p>
                <p><i className="fas fa-envelope"></i> noman1272003@gmail.com</p>
              </div>

              <div className="social-connect mtop">
                <span>CONNECT SECURELY</span>
                <div className="button f_flex">
                  <a href="https://www.linkedin.com/in/nurulislam21/" target="_blank" rel="noopener noreferrer">
                    <button className="btn_shadow social-btn"><i className="fab fa-linkedin-in"></i></button>
                  </a>
                  <a href="https://www.facebook.com/nurulislamnoman.21/" target="_blank" rel="noopener noreferrer">
                    <button className="btn_shadow social-btn"><i className="fab fa-facebook-f"></i></button>
                  </a>
                  <a href="https://www.instagram.com/nurul_islam.noman/" target="_blank" rel="noopener noreferrer">
                    <button className="btn_shadow social-btn"><i className="fab fa-instagram"></i></button>
                  </a>
                  <a href="https://github.com/nurulislam21" target="_blank" rel="noopener noreferrer">
                    <button className="btn_shadow social-btn"><i className="fa-brands fa-github"></i></button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="right box_shodow">
            <form onSubmit={formSubmit} className="contact-form">
              
              <div className="f_flex input-row">
                <div className="input-group">
                  <label>YOUR NAME</label>
                  <input type="text" name="fullname" value={data.fullname} onChange={InputEvent} required />
                </div>
                <div className="input-group">
                  <label>PHONE NUMBER</label>
                  <input type="tel" name="phone" value={data.phone} onChange={InputEvent} required />
                </div>
              </div>

              <div className="input-group">
                <label>EMAIL ADDRESS</label>
                <input type="email" name="email" value={data.email} onChange={InputEvent} required />
              </div>

              <div className="input-group">
                <label>SUBJECT</label>
                <input type="text" name="subject" value={data.subject} onChange={InputEvent} required />
              </div>

              <div className="input-group">
                <label>MESSAGE</label>
                <textarea name="message" value={data.message} onChange={InputEvent} rows="6" required></textarea>
              </div>

              <button type="submit" className="btn_shadow submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>TRANSMITTING... <i className="fas fa-spinner fa-spin"></i></span>
                ) : (
                  <span>SEND MESSAGE <i className="fas fa-paper-plane"></i></span>
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
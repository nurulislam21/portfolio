import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import contact1 from "./contract.jpg";
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", msg: "" });

    const templateParams = {
      from_name: data.fullname,
      from_phone: data.phone,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    };

    emailjs
      .send(
        "service_9fb85bs",
        "template_vm3tyl2",
        templateParams,
        "25VbxUozexc7-MGnZ"
      )
      .then(
        () => {
          setStatus({
            type: "success",
            msg: "Your message has been sent successfully.",
          });
          setData({
            fullname: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
          });
          setIsSubmitting(false);
        },
        (error) => {
          setStatus({
            type: "error",
            msg: "Something went wrong. Please reach out via email directly.",
          });
          console.error("EmailJS dispatch error:", error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="Contact top" id="Contact">
      <div className="container">
        <div className="heading text-center" data-aos="fade-up">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Let's Build Something Together</h2>
        </div>

        <div className="content d_flex mtop contact-grid">
          {/* Left Info Panel */}
          <div className="left tech-panel" data-aos="fade-right">
            <div className="img">
              <img src={contact1} alt="Nurul Islam Noman" />
            </div>
            <div className="details">
              <h1>Nurul Islam Noman</h1>
              <p className="title-tag">Embedded Systems & Hardware Engineer</p>
              <p className="desc">
                Open to custom PCB layout, embedded firmware development, robotics research, or engineering roles. Send a message to start a conversation.
              </p>

              <div className="contact-info">
                <p><i className="fas fa-phone-alt"></i> +880 1823-395901</p>
                <p><i className="far fa-envelope"></i> noman1272003@gmail.com</p>
                <p><i className="fas fa-map-marker-alt"></i> Gulshan 2, Dhaka, Bangladesh</p>
              </div>

              <div className="social-connect mtop">
                <span>CONNECT</span>
                <div className="button f_flex">
                  <a
                    href="https://www.linkedin.com/in/nurulislam21/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://github.com/nurulislam21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/nurulislamnoman.21/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="right tech-panel" data-aos="fade-left">
            <form onSubmit={handleFormSubmit} className="contact-form">
              <div className="f_flex input-row">
                <div className="input-group">
                  <label htmlFor="fullname">Your Name</label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={data.fullname}
                    onChange={handleInputChange}
                    required
                    className="tech-input"
                    placeholder="e.g. Alex Morgan"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={data.phone}
                    onChange={handleInputChange}
                    required
                    className="tech-input"
                    placeholder="e.g. +1 555-0199"
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleInputChange}
                  required
                  className="tech-input"
                  placeholder="e.g. alex@example.com"
                />
              </div>

              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={data.subject}
                  onChange={handleInputChange}
                  required
                  className="tech-input"
                  placeholder="e.g. PCB Design & Embedded Systems Project"
                />
              </div>

              <div className="input-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={data.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                  className="tech-input"
                  placeholder="Hi Noman, I reviewed your autonomous systems and PCB design work..."
                ></textarea>
              </div>

              {status.msg && (
                <div className={`status-message ${status.type === "success" ? "status-success" : "status-error"}`}>
                  <i className={`fas ${status.type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}`}></i>
                  <span>{status.msg}</span>
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>Sending Message... <i className="fas fa-circle-notch fa-spin"></i></span>
                ) : (
                  <span>Send Message <i className="far fa-paper-plane"></i></span>
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
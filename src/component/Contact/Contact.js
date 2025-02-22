// export default Contact;
import { useState } from 'react';
import contact1 from './contract.jpg';
import './Contact.css';
import emailjs from 'emailjs-com';  // Import emailjs

const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  };

  const formSubmit = (event) => {
    event.preventDefault();
    
    // Using emailjs to send the form data to your email inbox
    const templateParams = {
      from_name: data.fullname,
      from_phone: data.phone,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    };

    emailjs
      .send(
        'service_9fb85bs',  // Replace with your EmailJS service ID
        'template_vm3tyl2',  // Replace with your EmailJS template ID
        templateParams,
        '25VbxUozexc7-MGnZ'       // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          alert('Message sent successfully!');
          // Clear form after submission
          setData({
            fullname: '',
            phone: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          alert('Failed to send the message. Please try again.');
          console.error('Error sending message: ', error);
        }
      );
  };

  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            {/* Left Section */}
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='Nurul Islam' />
                </div>
                <div className='details'>
                  <h1>Nurul Islam</h1>
                  <p>I am available for freelance work. Connect with me via my social media or call me directly.</p>
                  <p>Phone: +8801823395901</p>
                  <p>Email: noman1272003@gmail.com</p>
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <a href="https://www.linkedin.com/in/nurulislam21/" target="_blank" rel="noopener noreferrer">
                      <button className='btn_shadow'>
                        <i className='fab fa-linkedin-in'></i>
                      </button>
                    </a>
                    <a href="https://www.facebook.com/nurulislamnoman.21/" target="_blank" rel="noopener noreferrer">
                      <button className='btn_shadow'>
                        <i className='fab fa-facebook-f'></i>
                      </button>
                    </a>
                    <a href="https://www.instagram.com/nurul_islam.noman/" target="_blank" rel="noopener noreferrer">
                      <button className='btn_shadow'>
                        <i className='fab fa-instagram'></i>
                      </button>
                    </a>
                    <a href="https://twitter.com/NurulislamN21" target="_blank" rel="noopener noreferrer">
                      <button className='btn_shadow'>
                        <i className='fab fa-twitter'></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <input
                  type='text'
                  name='fullname'
                  placeholder='Your Full Name'
                  value={data.fullname}
                  onChange={InputEvent}
                  required
                />
                <input
                  type='tel'
                  name='phone'
                  placeholder='Your Phone Number'
                  value={data.phone}
                  onChange={InputEvent}
                  required
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Your Email Address'
                  value={data.email}
                  onChange={InputEvent}
                  required
                />
                <input
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  value={data.subject}
                  onChange={InputEvent}
                />
                <textarea
                  name='message'
                  placeholder='Your Message'
                  value={data.message}
                  onChange={InputEvent}
                  required
                ></textarea>
                <button type='submit' className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

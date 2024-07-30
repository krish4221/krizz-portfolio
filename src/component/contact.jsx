import React from 'react';


function Contact() {
  return (
    <section className="contact" id="contact">
        <div className="contact-text">
          <h2>Contact <span>Me</span></h2>
          <h4>Let's Work Together</h4>
          <p>&copy;</p>
          <div className="contact-list">
            <li><i className='bx bxs-send'></i><a href="mailto:krishnakumar944385@gmail.com">krishnakumar944385@gmail.com</a></li>
            <li><i className='bx bx-phone'></i><a href="tel:+91 8300379804">+91 8300379804</a></li>
          </div>
          <div className="contact-icons">
            <a href="#"><i className='bx bxl-facebook-circle'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="#"><i className='bx bxl-instagram'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
          </div>
        </div>

        <div className="contact-form">
          <form action="">
            <input type="text" placeholder="Enter Your Name" required />
            <input type="email" placeholder="Enter Your Email" required />
            <input type="text" placeholder="Enter Your Subject" />
            <textarea cols="40" rows="10" placeholder="Enter Your Message" required></textarea>
            <input type="submit" value="Submit" className="send" />
          </form>
        </div>
        <a href="#" className="top"><i className='bx bx-up-arrow-alt'></i></a>
      </section>
  );
}

export default Contact;

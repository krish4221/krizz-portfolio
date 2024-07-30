import React from 'react';
import img1 from '../img/img1.png'
import img2 from '../img/img3.png'
import img3 from '../img/img2.png'
import img4 from '../img/img4.png'
function Portfolio() {
  return (
    <section id="portfolio">
      <div className="main-text">
        <h2>Latest <span>Projects</span></h2>
        <div className="portfolio-content">
          <div className="row">
            <img src={img1} alt="Netflix Clone" className='pro-img' />
            <div className="layer">
              <h5>INSTAGRAM CLONE</h5>
              <p>Developed a  Instagram clone website using HTML,CSS,JavaScript and React js aimed at mimicking the user interface and functionality of the popular streaming platform.</p>
              <a href="#contact"><i className='bx bx-link-external' style={{ color: 'skyblue' }}></i></a>
            </div>
          </div>
          <div className="row">
            <img src={img4} alt="Sneaker Store" className='pro-img' />
            <div className="layer">
              <h5>Jacket STORE</h5>
              <p>Introducing my latest endeavor: a visionary Jackets web project! With HTML, CSS, JavaScript, and React JS at its core, this platform seamlessly merges style and technology. From dynamic product displays to personalized user journeys, every aspect is meticulously designed to enhance the Jacket shopping experience.</p>
              <a href="#contact"><i className='bx bx-link-external' style={{ color: 'skyblue' }}></i></a>
            </div>
          </div>
        </div>
        <div className="portfolio-content">
          <div className="row">
            <img src={img3} alt="Netflix Clone" />
            <div className="layer">
              <h5>Login In Page</h5>
              <p>Developed a  login form  using HTML and CSS aimed at mimicking the user interface .</p>
              <a href="#contact"><i className='bx bx-link-external' style={{ color: 'skyblue' }}></i></a>
            </div>
          </div>
          <div className="row">
            <img src={img2} alt="Sneaker Store" />
            <div className="layer">
              <h5>Responsive Web page</h5>
              <p>Developed a responsive web page using HTML, CSS, Bootstrap and Mediaquary this platform seamlessly merges style From dynamic product displays to personalized user journeys, every aspect is meticulously designed to enhance the Webpage</p>
              <a href="#contact"><i className='bx bx-link-external' style={{ color: 'skyblue' }}></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

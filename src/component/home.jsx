import React from 'react';
import img from '../img/main.png'


function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3> <span style={{ color: '#0ef' }}>Hello,</span>It's Me</h3>
        <h1>Krishna  <span style={{ color: '#0ef' }}>  Kumar</span></h1>
        <p> <br /> I'm a dedicated software developer with a passion for creating innovative digital solutions. With a strong foundation in programming and a knack for problem-solving, I specialize in crafting robust software applications that drive efficiency and user satisfaction.</p>
        <div className="home-sci">
          <a href="#contact"  ><i className='bx bxl-whatsapp'></i></a>
          <a href="#contact"  ><i className='bx bxl-instagram'></i></a>
          <a href="#contact"  ><i className='bx bxl-linkedin-square'></i></a>
          <a href="krishnakumar944385@gmail.com"  ><i className='bx bxl-gmail'></i></a>
        </div>
        <a href="#aboutme" className="btn-box">More About Me</a>
      </div>
      {/* <img src="g3.jpg" alt="" /> */}
      <div className='home-main-img'><img src={img} alt=""  className='main-img'/></div>
    </section>
  );
}

export default Home;

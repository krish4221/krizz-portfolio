import React from 'react';


function Skills() {
  return (
    <section className='skil-main' id="skills">
      <h1 className="sub-title">My <span>Skills</span></h1>
      <div className="icons">
        <span><i style={{ color: '#c95d2e' }} className='bx bxl-html5'></i></span>
        <span><i style={{ color: '#147bbc' }} className='bx bxl-css3'></i></span>
        <span><i style={{ color: '#b0bc1e' }} className='bx bxl-javascript'></i></span>
        <span><i style={{ color: '#69bcbc' }} className='bx bxl-react'></i></span>
        
        <span><i style={{ color: '#007BFF' }} className='bx bxl-bootstrap'></i></span>
       
      </div>
    </section>
  );
}

export default Skills;

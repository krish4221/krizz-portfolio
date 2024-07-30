import React from 'react';

import { Link   } from 'react-scroll';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="home"  smooth={true} duration={100} >HOME</Link>
        <Link to="education"  smooth={true} duration={100}>RESUME</Link>
        <Link to="skills"  smooth={true} duration={100}>SKILLS</Link>
        <Link to="portfolio"  smooth={true} duration={100}>PROJECTS</Link>
        <Link to="contact"  smooth={true} duration={100}>CONTACT</Link>
      </nav>
    </header>
  );
}

export default Header;

import React, { useState } from 'react';
import '../css/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
    
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#about" onClick={toggleMenu}>About me</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;



/* import '../css/Navbar.css';

const Navbar: React.FC = () => (
  <div className="navbar">
    <a className="nav-title-link" href="/">
      <span className="nav-title">GP Portfolio</span>
    </a>
    <a className="button" href="#">
      <span className="button-text">Contact Me</span>
    </a>
  </div>
);

export default Navbar; */

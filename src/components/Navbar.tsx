import React, { useState } from 'react';
import '../css/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="nav-title-link">Portfolio</a>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#my-work-section" onClick={toggleMenu}>Projects</a>
        <a href="#about-section" onClick={toggleMenu}>Background</a>
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




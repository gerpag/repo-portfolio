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
        <a href="http://localhost:5173/" onClick={toggleMenu}>Home</a>
        <a href="http://localhost:5173#my-work-section" onClick={toggleMenu}>Projects</a>
        <a href="http://localhost:5173#about-section" onClick={toggleMenu}>Background</a>
        <a href="http://localhost:5173#contact" onClick={toggleMenu}>Contact</a>
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




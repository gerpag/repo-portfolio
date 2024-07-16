import React, { useState, useEffect, useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import '../css/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} data-theme={theme}>
      <a href="/" className="nav-title-link">Portfolio</a>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="/#my-work-section" onClick={toggleMenu}>Projects</a>
        <a href="/#about-section" onClick={toggleMenu}>Background</a>
        <a href="/#contact" onClick={toggleMenu}>Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;




/* import React, { useState, useEffect, useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import useThemeToggle from '../hooks/useThemeToogle'; 
import '../css/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useThemeToggle(); 
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} data-theme={theme}>
      <a href="/" className="nav-title-link">Portfolio</a>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="/#my-work-section" onClick={toggleMenu}>Projects</a>
        <a href="/#about-section" onClick={toggleMenu}>Background</a>
        <a href="/#contact" onClick={toggleMenu}>Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <button onClick={toggleTheme} className="theme-toggle-button">
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
        
      </button>
    </nav>
  );
};

export default Navbar;

 */

/* import React, { useState, useEffect, useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import '../css/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} data-theme={theme}>
      <a href="/" className="nav-title-link">Portfolio</a>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="/#my-work-section" onClick={toggleMenu}>Projects</a>
        <a href="/#about-section" onClick={toggleMenu}>Background</a>
        <a href="/#contact" onClick={toggleMenu}>Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
 */

/* import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../css/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const themeContext = useContext(ThemeContext);


  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { theme, toggleTheme } = themeContext;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <a href="/" className="nav-title-link">Portfolio</a>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="/#my-work-section" onClick={toggleMenu}>Projects</a>
        <a href="/#about-section" onClick={toggleMenu}>Background</a>
        <a href="/#contact" onClick={toggleMenu}>Contact</a>
      </div>
      <div className="navbar-actions">
      <button onClick={toggleTheme} className="theme-toggle-button">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
        
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

 */





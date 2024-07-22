import React, { useState, useEffect} from 'react';
import { FaSun, FaMoon} from 'react-icons/fa';

import {useTheme} from '../context/ThemeContext';
import { useLanguage, Language } from '../context/LanguageContext'; 
import '../css/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, translate } = useLanguage();

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

  const changeLanguage = (lang: Language) => {
    setLanguage(lang); 
  };

  const languageLabel = language === 'en' ? 'Esp' : 'Eng';


  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} data-theme={theme}>





      <a href="/" className="nav-title-link">{translate('navbar.portfolio')}</a>  
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="/#my-work-section" onClick={toggleMenu}>{translate('navbar.projects')}</a>
        <a href="/#about-section" onClick={toggleMenu}>{translate('navbar.background')}</a>
        <a href="/#contact" onClick={toggleMenu}>{translate('navbar.contact')}</a>
      </div>
      <div className="nav-controls">
        <button onClick={toggleTheme} className="theme-toggle-button">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        <button onClick={() => changeLanguage(language === 'en' ? 'es' : 'en')} className="nav-link">
          {languageLabel}
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



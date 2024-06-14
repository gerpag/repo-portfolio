import React from 'react';
import '../css/PortfolioHeader.css';
import perfilImage from '../assets/images/perfil.jpg';
import { FaGithub, FaFileAlt, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const PortfolioHeader: React.FC = () => (
  <div id="portfolio-header">
    <div id="portfolio-header-image-container">
      <img src={perfilImage} alt="Perfil" className="portfolio-header-image" />
    </div>
    <div id="portfolio-header-text-container">
      <div className="header-text">
        <span className="main-title">Hey, I'm Germinal.</span>
        <div className="body-text">I’m a full stack developer.</div>
      </div>
      <div className="body-text">
        I'm interested in the intersection of technology and philosophy. I have recently trained as a fullstack developer (<a href="https://www.plataforma5.la/bootcamp/javascript" target="_blank" rel="noopener noreferrer">P5</a>).
        My goal is to continue learning and bridging these fields that I am passionate about.
      </div>
      
      <div id='gh-cv-lk' className="icon-links">
        <a href="https://github.com/gerpag" target="_blank" rel="noopener noreferrer" className="icon-link"><FaGithub /></a>
          
        <a href="/ruta-a-cv.pdf" download className="icon-link"><FaFileAlt /></a>
        <a href="mailto:germinalfp@gmail.com" className="icon-link"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer" className="icon-link"><FaLinkedin /></a>
      </div>
      
    </div>
  </div>
);

export default PortfolioHeader;

import React from 'react';
import '../css/PortfolioHeader.css';
import perfilImage from '../assets/images/perfil.jpg';
import { FaGithub, FaFileAlt, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const PortfolioHeader: React.FC = () => {
  const { translate } = useLanguage();

  return (
    <div id="portfolio-header">
      <div id="portfolio-header-image-container">
        <img src={perfilImage} alt="Perfil" className="portfolio-header-image" />
      </div>
      <div id="portfolio-header-text-container">
        <div className="header-text">
          <span className="main-title">{translate('header.mainTitle')}</span>
          <div className="body-text">{translate('header.profession')}</div>
        </div>
        <div className="body-text">
          {translate('header.interests')}<br />
          {translate('header.training')} <br />
          {translate('header.goals')}
        </div>
        <div id='gh-cv-lk' className="icon-links">
          <a href={translate('header.github')} target="_blank" rel="noopener noreferrer" className="icon-link"><FaGithub /></a>
          <a href={translate('header.resume')} target="_blank" rel="noopener noreferrer" className="icon-link"><FaFileAlt /></a>
          <a href={translate('header.email')} className="icon-link"><FaEnvelope /></a>
          <a href={translate('header.linkedin')} target="_blank" rel="noopener noreferrer" className="icon-link"><FaLinkedin /></a>
          <a href={translate('header.discord')} target="_blank" rel="noopener noreferrer" className="icon-link"><FaDiscord /></a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;


/* import React from 'react';
import '../css/PortfolioHeader.css';
import perfilImage from '../assets/images/perfil.jpg';
import { FaGithub, FaFileAlt, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';
import { translate } from '../i18n'; 

const PortfolioHeader: React.FC = () => (
  <div id="portfolio-header">
    <div id="portfolio-header-image-container">
      <img src={perfilImage} alt="Perfil" className="portfolio-header-image" />
    </div>
    <div id="portfolio-header-text-container">
      <div className="header-text">
        <span className="main-title">{translate('header.mainTitle')}</span>
        <div className="body-text">{translate('header.profession')}</div>
      </div>
      <div className="body-text">
        {translate('header.interests')}
        <br />
        {translate('header.training')} <a href={translate('header.resume')} target="_blank" rel="noopener noreferrer">{translate('header.learnMore')}</a>
        <br />
        {translate('header.goals')}
      </div>
      
      <div id='gh-cv-lk' className="icon-links">
        <a href={translate('header.github')} target="_blank" rel="noopener noreferrer" className="icon-link"><FaGithub /></a>
        <a href={translate('header.resume')} target="_blank" rel="noopener noreferrer" className="icon-link"><FaFileAlt /></a>
        <a href={translate('header.email')} className="icon-link"><FaEnvelope /></a>
        <a href={translate('header.linkedin')} target="_blank" rel="noopener noreferrer" className="icon-link"><FaLinkedin /></a>
        <a href={translate('header.discord')} target="_blank" rel="noopener noreferrer" className="icon-link"><FaDiscord /></a>
      </div>
    </div>
  </div>
);

export default PortfolioHeader;


 */

/* 

import React from 'react';
import '../css/PortfolioHeader.css';
import perfilImage from '../assets/images/perfil.jpg';
import { FaGithub, FaFileAlt, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';

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
        I'm interested in the intersection of technology and philosophy. <br />
        I have recently trained as a fullstack developer.  <br />
        My goal is to continue learning and bridging these fields that I am passionate about.
      </div>
      
      <div id='gh-cv-lk' className="icon-links">
        <a href="https://github.com/gerpag" target="_blank" rel="noopener noreferrer" className="icon-link"><FaGithub /></a>
        <a href="https://drive.google.com/file/d/1Z1JbXwXGRB9XkayJGxHim3Ueu1Fb9jzh/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="icon-link"><FaFileAlt /></a>
        <a href="mailto:germinalfp@gmail.com" className="icon-link"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/germinal-pagliuca" target="_blank" rel="noopener noreferrer" className="icon-link"><FaLinkedin /></a>
        <a href="https://discordapp.com/users/724728588519342100" target="_blank" rel="noopener noreferrer" className="icon-link"><FaDiscord /></a>
      </div>
    </div>
  </div>
);

export default PortfolioHeader;
 */
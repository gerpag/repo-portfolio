import React from 'react';
import '../css/Footer.css';
import { FaGithub, FaFileAlt, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => (
  <div id="footer">
    <a href="https://github.com/gerpag" target="_blank" rel="noopener noreferrer" className="icon-link"><FaGithub /></a>
          
          <a href="#" download className="icon-link"><FaFileAlt /></a>
          <a href="mailto:germinalfp@gmail.com" className="icon-link"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer" className="icon-link"><FaLinkedin /></a>
  </div>
);

export default Footer;

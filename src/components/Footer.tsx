import React from 'react';
import '../css/Footer.css';

const Footer: React.FC = () => (
  <div id="footer">
    <a className="icon-link" target="_blank" href="https://twitter.com/whitevans_eth" rel="noopener noreferrer">
      <img src="./assets/icons/instagram.svg" alt="Instagram" className="footer-icon" />
    </a>
    <a className="icon-link" target="_blank" href="https://twitter.com/whitevans_eth" rel="noopener noreferrer">
      <img src="./assets/icons/twitter.svg" alt="Twitter" className="footer-icon" />
    </a>
    <a className="icon-link" href="#">
      <img src="./assets/icons/mail.svg" alt="Email" className="footer-icon" />
    </a>
  </div>
);

export default Footer;

import React from 'react';
import { FaCopyright } from 'react-icons/fa';
import '../css/Footer.css';


const Footer: React.FC = () => (
  <footer id="footer">
    <div className="footer-content">
      <p>
        <FaCopyright className="footer-icon" /> {new Date().getFullYear()} Germinal Pagliuca. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

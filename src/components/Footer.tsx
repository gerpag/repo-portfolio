import React from 'react';
import { FaCopyright } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import "../i18n";
import '../css/Footer.css';


const Footer: React.FC = () => { 
  const { translate } = useLanguage();
  return(
  
  <footer id="footer">
    <div className="footer-content">
      <p>
        <FaCopyright className="footer-icon" /> {new Date().getFullYear()} {translate('footer.rightsReserved')}
      </p>
    </div>
  </footer>
);
}
export default Footer;

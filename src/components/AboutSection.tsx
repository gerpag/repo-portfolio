import React from 'react';
import '../css/AboutSection.css';

const AboutSection: React.FC = () => (
  <div id="about-section">
    <span className="subheader-text">My Background</span>
    <div className="about-section-content">
      <div className="body-text">
        I'm interested in the intersection of technology and philosophy. I have recently trained as a fullstack developer (<a href="https://www.plataforma5.la/bootcamp/javascript" target="_blank" rel="noopener noreferrer">P5</a>).
        My goal is to continue learning and bridging these fields that I am passionate about.
      </div>
      <div className="body-text">
        Vitae justo eget magna fermentum. Imperdiet nulla malesuada pellentesque elit eget gravida.
        
      </div>
    </div>
  </div>
);

export default AboutSection;

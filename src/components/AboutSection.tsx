import React from 'react';
import {
  FaReact, FaCss3Alt, FaNodeJs,FaDocker, FaJenkins, FaGithub, FaGitAlt, FaTrello, FaAws, FaFileAlt
} from 'react-icons/fa';
import { SiKubernetes, SiExpress, SiJsonwebtokens, SiPostgresql, SiMongodb, SiUdemy} from 'react-icons/si'; 
import '../css/AboutSection.css';
import P5 from "../assets/icons/P5(1).jpg"
import fei from "../assets/icons/FEI.jpg"
import udemy from "../assets/icons/udemy.jpg"





const AboutSection: React.FC = () => (
  <div id="about-section">
    <h2 className="section-title">My Background</h2>
    <div className="about-section-content">
      <div className="skills-section">
        <span className="subsection-title1">Technical Skills</span>
        <div className="skill-category">
          <div className="skills-list">
            <div className="skill">
              <FaReact />
              <span className="skill-label">React</span>
            </div>
        
            <div className="skill">
              <FaCss3Alt />
              <span className="skill-label">CSS3</span>
            </div>
            <div className="skill">
              <FaNodeJs />
              <span className="skill-label">Node.js</span>
            </div>
            <div className="skill">
              <SiExpress />
              <span className="skill-label">Express</span>
            </div>
            <div className="skill">
              <SiPostgresql />
              <span className="skill-label">PostgreSQL</span>
            </div>
            <div className="skill">
              <SiMongodb />
              <span className="skill-label">MongoDB</span>
            </div>
            <div className="skill">
              <SiJsonwebtokens />
              <span className="skill-label">JWT</span>
            </div>
          </div>
        </div>
        
        <div className="skill-category">
          <div className="skills-list">
            <div className="skill">
              <FaDocker />
              <span className="skill-label">Docker</span>
            </div>
            <div className="skill">
              <FaJenkins />
              <span className="skill-label">Jenkins</span>
            </div>
            <div className="skill">
              <SiKubernetes />
              <span className="skill-label">Kubernetes</span>
            </div>
            
            <div className="skill">
              <FaGitAlt />
              <span className="skill-label">Git</span>
            </div>
            <div className="skill">
              <FaGithub />
              <span className="skill-label">GitHub</span>
            </div>
            <div className="skill">
              <FaAws />
              <span className="skill-label">AWS</span>
            </div>
            
            <div className="skill">
              <FaTrello />
              <span className="skill-label">Trello</span>
            </div>
          </div>
        </div>
      
      </div>
      <div className="section">
        <span className="subsection-title1">Education</span>
        <ul className="certificates-list">
          <li className="certificate-item"> <a href="https://www.plataforma5.la/bootcamp/javascript" target="_blank" rel="noopener noreferrer"><img id='p5' className='school-icon' src={P5} alt="School Plataforma 5 Icon" /> </a>  JavaScript Coding Bootcamp, Full Stack Developer  </li>
          <li className="certificate-item"> <a href='#' target="_blank" rel="noopener noreferrer"><img className='school-icon' src={udemy} alt="School Udemy Icon" /> </a>  DevOps with Docker, Jenkins, Kubernetes, Git, GitFlow and CI/CD</li>
          <li className="certificate-item"> <a href='#' target="_blank" rel="noopener noreferrer"><img className='school-icon' src={fei} alt="School FEI Icon" />  </a> Computer cybersecurity in the company</li>
         
        </ul>
        <div id='cv'>
            <a  href="#"  className="icon-link skill"><FaFileAlt /> <span className="skill-label">CV</span></a>

        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;





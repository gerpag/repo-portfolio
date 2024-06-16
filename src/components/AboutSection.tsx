import React from 'react';
import {
  FaReact, FaCss3Alt, FaNodeJs, FaDatabase, FaDocker, FaJenkins, FaGithub, FaGitAlt, FaTrello
} from 'react-icons/fa';
import { SiKubernetes, SiExpress, SiJsonwebtokens } from 'react-icons/si';
import '../css/AboutSection.css';

const AboutSection: React.FC = () => (
  <div id="about-section">
    <h2 className="section-title">My Background</h2>
    <p className="section-description">
      Below is a summary of my technical skills, methodologies, and certifications.
    </p>
    <div className="about-section-content">
      <div className="skills-section">
        <span className="subsection-title">Technical Skills</span>
        <div className="skill-category">
          <span className="subsection-title">Frontend</span>
          <div className="skills-list">
            <div className="skill">
              <FaReact  />
            </div>
            <div className="skill">
              <FaCss3Alt  />
            </div>
          </div>
        </div>
        <div className="skill-category">
          <span className="subsection-title">Backend</span>
          <div className="skills-list">
            <div className="skill">
              <FaNodeJs />
            </div>
            <div className="skill">
              <SiExpress  />
            </div>
            <div className="skill">
              <FaDatabase  />
            </div>
            <div className="skill">
              <SiJsonwebtokens />
            </div>
          </div>
        </div>
        <div className="skill-category">
          <span className="subsection-title">DevOps</span>
          <div className="skills-list">
            <div className="skill">
              <FaDocker  />
            </div>
            <div className="skill">
              <FaJenkins />
            </div>
            <div className="skill">
              <SiKubernetes />
            </div>
            <div className="skill">
              <FaGithub  />
            </div>
            <div className="skill">
              <FaGitAlt />
            </div>
          </div>
        </div>
        <div className="skill-category">
          <span className="subsection-title">Agile/Scrum Methodologies</span>
          <div className="skills-list">
            <div className="skill">
              <FaGithub  />
            </div>
            <div className="skill">
              <FaGitAlt  />
            </div>
            <div className="skill">
              <FaTrello />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <span className="subsection-title">Certificates</span>
        <ul className="certificates-list">
          <li className="certificate-item">Plataforma 5: <a href="https://www.plataforma5.la/bootcamp/javascript" target="_blank" rel="noopener noreferrer">JavaScript Coding Bootcamp (2023)</a>, Full Stack Developer</li>
          <li className="certificate-item">Udemy: DevOps with Docker, Jenkins, Kubernetes, git, GitFlow CI & CD
          </li>
          <li className="certificate-item">Computer cybersecurity in the company (2024)</li>
        </ul>
      </div>
      
    </div>
  </div>
);

export default AboutSection;





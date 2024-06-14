import React from 'react';
import { FaReact, FaCss3Alt, FaNodeJs, FaDatabase, FaDocker, FaJenkins, FaGithub, FaGitAlt, FaTrello } from 'react-icons/fa'; // Importar los íconos de FontAwesome
import { SiKubernetes } from 'react-icons/si';
import '../css/AboutSection.css';

const AboutSection: React.FC = () => (
  <div id="about-section">
    <h2 className="section-title">My Background</h2>
    <p className="section-description">Below are my technical skills, agile/scrum methodologies, and certificates.</p>
    <div className="section">
      <span className="subsection-title">Technical Skills</span>
      <div className="skills-list">
        <div className="skill">
          <FaReact alt="React" />
          <span className="skill-label">React</span>
        </div>
        <div className="skill">
          <FaCss3Alt alt="CSS" />
          <span className="skill-label">CSS</span>
        </div>
        {/* Agregar más íconos y habilidades de Frontend según sea necesario */}
      </div>
    </div>
    <div className="section">
      <span className="subsection-title">Backend</span>
      <div className="skills-list">
        <div className="skill">
          <FaNodeJs alt="Node.js" />
          <span className="skill-label">Node.js</span>
        </div>
        <div className="skill">
          <FaDatabase alt="Databases" />
          <span className="skill-label">Databases</span>
        </div>
        {/* Agregar más íconos y habilidades de Backend según sea necesario */}
      </div>
    </div>
    <div className="section">
      <span className="subsection-title">DevOps</span>
      <div className="skills-list">
        <div className="skill">
          <FaDocker alt="Docker" />
          <span className="skill-label">Docker</span>
        </div>
        <div className="skill">
          <FaJenkins alt="Jenkins" />
          <span className="skill-label">Jenkins</span>
        </div>
        <div className="skill">
          <SiKubernetes alt="Kubernetes" />
          <span className="skill-label">Kubernetes</span>
        </div>
        <div className="skill">
          <FaGithub alt="GitHub" />
          <span className="skill-label">GitHub</span>
        </div>
        <div className="skill">
          <FaGitAlt alt="Git" />
          <span className="skill-label">Git</span>
        </div>
        <div className="skill">
          <FaTrello alt="Trello" />
          <span className="skill-label">Trello</span>
        </div>
        {/* Agregar más íconos y habilidades de DevOps según sea necesario */}
      </div>
    </div>
    <div className="section">
      <span className="subsection-title">Agile/Scrum Methodologies</span>
      <div className="body-text">
        {/* Agregar texto o detalles sobre Agile/Scrum Methodologies */}
      </div>
    </div>
    <div className="section">
      <span className="subsection-title">Certificates</span>
      <ul className="certificates-list">
        <li className="certificate-item">Certificate 1</li>
        <li className="certificate-item">Certificate 2</li>
        <li className="certificate-item">Certificate 3</li>
        {/* Agregar más certificados según sea necesario */}
      </ul>
    </div>
  </div>
);

export default AboutSection;












/* import React from 'react';
import { FaReact, FaCss3Alt, FaNodeJs, FaDatabase, FaDocker, FaJenkins, FaGithub, FaGitAlt, FaTrello } from 'react-icons/fa'; // Importar los íconos de FontAwesome
import { SiKubernetes } from 'react-icons/si';
import '../css/AboutSection.css';

const AboutSection: React.FC = () => (
  <div id="about-section">
    <span className="section-title">My Background</span>
    <div className="section">
      <span className="subsection-title">Technical Skills</span>
      <div className="skills-list">
        <div className="skill frontend">
          <FaReact />
        </div>
        <div className="skill frontend">
          <FaCss3Alt />
        </div>
        <div className="skill backend">
          <FaNodeJs />
        </div>
        <div className="skill backend">
          <FaDatabase />
        </div>
        <div className="skill devops">
          <FaDocker />
        </div>
        <div className="skill devops">
          <FaJenkins />
        </div>
        <div className="skill devops">
          <SiKubernetes />
        </div>
        <div className="skill devops">
          <FaGithub />
        </div>
        <div className="skill devops">
          <FaGitAlt />
        </div>
        <div className="skill devops">
          <FaTrello />
        </div>
      </div>
    </div>
    <div className="section">
      <span className="subsection-title">Agile/Scrum Methodologies</span>
      <div className="body-text">
        {/* Agregar texto o detalles sobre Agile/Scrum Methodologies 
     

export default AboutSection;
 */










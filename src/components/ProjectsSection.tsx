import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProjectsSection.css';
import { projects } from "../data/projectsDescription";
import { useLanguage } from '../context/LanguageContext';
import "../i18n";

const ProjectsSection: React.FC = () => {
  
  const { language, translate } = useLanguage();
  const selectedProjects = projects[language];

  return (
    <div id="my-work-section">
      <h2 className="section-title">{translate('projectsSection.title')}</h2>
      <div className="projects-container">
        {selectedProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-card-overlay">
              <h3 className="project-title">{project.title}</h3>
              <Link className="button" to={project.link}>
                <span className="button-text">{translate('projectsSection.readMore')}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;



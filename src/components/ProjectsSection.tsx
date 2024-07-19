import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProjectsSection.css';
import { projects } from "../data/projects";
import { useLanguage } from '../context/LanguageContext';
import "../i18n";

const ProjectsSection: React.FC = () => {
  const { translate } = useLanguage();

  return (
    <div id="my-work-section">
      <h2 className="section-title">{translate('projectsSection.title')}</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={translate(project.titleKey)} className="project-image" />
            <div className="project-card-overlay">
              <h3 className="project-title">{translate(project.titleKey)}</h3>
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



import React from "react"
import { Link } from 'react-router-dom';
import '../css/ProjectsSection.css';
import { moreProjects } from '../data/projectsDescription';
import { useLanguage } from '../context/LanguageContext';
import "../i18n";

const MoreProjects: React.FC<{}>  = () => { 
  const { language, translate } = useLanguage();
  const selectedProjects = moreProjects[language];

  return ( 

  <div id="more-projects-section">
    <h2 className="section-title">{translate('moreProjectsSection.title')}</h2>
    <div className="projects-container">
      {selectedProjects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-card-overlay">
            <h3 className="project-title">{project.title}</h3>
            <Link className="button" to={project.link}>
              <span className="button-text">Read More</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
};

export default MoreProjects;





/*  import { Link } from 'react-router-dom';
import '../css/ProjectsSection.css';

import {moreProjects} from "../data/projects"


const MoreProjects = () => (
  <div id="more-projects-section">
    <h2 className="section-title">More Projects</h2>
    <div className="projects-container">
      {moreProjects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-card-overlay">
            <h3 className="project-title">{project.title}</h3>
            <p>{project.image}</p>
            <Link className="button" to={project.link}>
              <span className="button-text">Read More</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MoreProjects; */
 
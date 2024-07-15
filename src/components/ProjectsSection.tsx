import { Link } from 'react-router-dom';
import '../css/ProjectsSection.css';

import { projects } from "../data/projects"



const ProjectsSection = () => (
  <div id="my-work-section">
    <h2 className="section-title">My Projects</h2>
    <div className="projects-container">
      {projects.map((project, index) => (
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
);

export default ProjectsSection;



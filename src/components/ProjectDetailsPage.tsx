import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetails from '../commons/ProjectDetails';
import "../css/ProjectDetailsPage.css";
import projects from '../data/projects';

const ProjectDetailsPage: React.FC = () => {
  const { title } = useParams<{ title: string }>();

  
  const project = projects.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-') === title?.toLowerCase()
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details-page">
      <ProjectDetails
        name={project.title}
        description={project.description}
        image={project.image}
        demoVideo={project.demoVideo} 
        details={project.details}
        galleryImages={project.galleryImages}
        technologies={project.technologies}
        repository={project.repository}
      />
    </div>
  );
};

export default ProjectDetailsPage;




/* import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetails from '../commons/ProjectDetails';
import "../css/ProjectDetailsPage.css"
import projects from '../data/projects';

const ProjectDetailsPage: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === title?.toLowerCase());

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details-page">
      <ProjectDetails
        name={project.title}
        description={project.description}
        image={project.image}
        demoVideo={project.demoVideo} 
        details={project.details}
        galleryImages={project.galleryImages}
        technologies={project.technologies}
        repository={project.repository}
      />
    </div>
  );
};

export default ProjectDetailsPage; */







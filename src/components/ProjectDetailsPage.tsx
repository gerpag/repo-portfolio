import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetails from '../commons/ProjectDetails';
import projects from '../data/projects';

const ProjectDetailsPage: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const project = projects.find(p => p.title === title);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectDetails
      name={project.title}
      description={project.description}
      headerImageSrc={project.image}
      details={project.details}
      galleryImages={project.galleryImages}
    />
  );
};

export default ProjectDetailsPage;

import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetails from '../commons/ProjectDetails';
import "../css/ProjectDetailsPage.css";
import {projectsDetail}  from '../data/projectsDetail';
import { useLanguage } from '../context/LanguageContext';
import "../i18n";

const ProjectDetailsPage: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  
  const { language } = useLanguage();
  const selectedProjects = projectsDetail[language];
  
  const project = selectedProjects.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-') === title?.toLowerCase()
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details-page">
      <ProjectDetails
        name={project.title}
        subTitle={project.subTitle}
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










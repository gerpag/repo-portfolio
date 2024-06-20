import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../commons/Modal';
import '../css/ProjectsSection.css';

import arrowRightIcon from '../assets/icons/arrow-right.svg';
import fastDeliveryImage from '../assets/images/FastDelivery.png';
import polirubroImage from '../assets/images/polirubro.png';
import houseOfDevImage from '../assets/images/HouseOfDev.png';
import moreImage from '../assets/images/plano-MORE.jpeg';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Delivery App',
    description: 'Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium',
    image: fastDeliveryImage,
    link: ''
  },
  {
    title: 'Digital Catalog',
    description: 'Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium',
    image: polirubroImage,
    link: './project-pages/project-template.html'
  },
  {
    title: 'Real-estate App',
    description: 'Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium',
    image: houseOfDevImage,
    link: './project-pages/project-template.html'
  },
  {
    title: 'More Projects',
    description: 'Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium',
    image: moreImage,
    link: './project-pages/project-template.html'
  }
];

const ProjectsSection: React.FC = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedProjectIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedProjectIndex(null);
  };

  const handlePrev = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects.length - 1));
    }
  };

  const handleNext = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : 0));
    }
  };

  return (
    <div id="my-work-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => handleCardClick(index)}>
            <div className="project-card-overlay">
              <h3 className="project-title">{project.title}</h3>
            </div>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-card-footer">
              <Link className="button" to={`/project/${encodeURIComponent(project.title)}`}>
                <span className="button-text">Read More</span>
                <img src={arrowRightIcon} alt="Arrow Right" className="right-arrow-icon" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      {selectedProjectIndex !== null && (
        <Modal
          isOpen={true}
          onClose={handleCloseModal}
          title={projects[selectedProjectIndex].title}
          description={projects[selectedProjectIndex].description}
          image={projects[selectedProjectIndex].image}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default ProjectsSection;



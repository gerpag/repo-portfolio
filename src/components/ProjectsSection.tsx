import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProjectsSection.css';

import arrowRightIcon from '../assets/icons/arrow-right.svg';
import fastDeliveryImage from '../assets/images/FastDelivery.jpg';
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
    title: 'Fast Delivery app',
    description: 'Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium',
    image: fastDeliveryImage,
    link: '/project/fast-delivery-app'
  },
  {
    title: 'Polirubro props',
    description: 'Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium',
    image: polirubroImage,
    link: '/project/polirubro-props'
  },
  {
    title: 'House of Dev',
    description: 'Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium',
    image: houseOfDevImage,
    link: '/project/house-of-dev'
  },
  {
    title: 'More Projects',
    description: 'Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium',
    image: moreImage,
    link: '/project/more-projects'
  }
];

const ProjectsSection: React.FC = () => (
  <div id="my-work-section">
    <h2 className="section-title">My Projects</h2>
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-card-overlay">
            <h3 className="project-title">{project.title}</h3>
            <Link className="button" to={project.link}>
              <span className="button-text">Read More</span>
              <img src={arrowRightIcon} alt="Arrow Right" className="right-arrow-icon" />
            </Link>
          </div>
          <img src={project.image} alt={project.title} className="project-image" />
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsSection;





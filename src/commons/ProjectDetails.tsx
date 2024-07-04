import React, { useState } from 'react';
import Modal from './Modal';
import '../css/ProjectDetails.css';

interface ProjectDetailsProps {
  name: string;
  description: string;
  image: string;
  demoVideo: string; 
  details: string[];
  galleryImages: { src: string; caption: string; isHalfWidth: boolean }[];
  technologies?: string[];
  repository?: { front: string; back: string };
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  name,
  description,
  image,
  demoVideo,
  details,
  galleryImages,
  technologies = [],
  repository = { front: '', back: '' }
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="project-details">
      <h1>{name}</h1>
      <div className="project-header-image-container" onClick={handleImageClick}>
        <img
          src={image}
          alt={name}
          className="project-header-image"
        />
        <span className="project-demo-text">Demo</span>
      </div>
      
     
      <p className="body-text">{description}</p>
      
      <h2>Details</h2>
      <ul>
        {details.map((detail, index) => (
          <li key={index} className="body-text">{detail}</li>
        ))}
      </ul>
      
      {technologies.length > 0 && (
        <>
          <h2>Technologies</h2>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index} className="body-text">{tech}</li>
            ))}
          </ul>
        </>
      )}

      {repository.front || repository.back ? (
        <>
          <h2>Repository</h2>
          <ul>
            {repository.front && (
              <li className="body-text">Frontend: <a href={repository.front} target="_blank" rel="noopener noreferrer">{repository.front}</a></li>
            )}
            {repository.back && (
              <li className="body-text">Backend: <a href={repository.back} target="_blank" rel="noopener noreferrer">{repository.back}</a></li>
            )}
          </ul>
        </>
      ) : null}

      <h2>Gallery</h2>
      <div id="project-gallery" className="project-gallery-content">
        {galleryImages.map((image, index) => (
          <div key={index} className={`gallery-image-container ${image.isHalfWidth ? 'half-width' : ''}`}>
            <img src={image.src} alt={image.caption} className="gallery-image" />
            <p className="image-caption">{image.caption}</p>
          </div>
        ))}
      </div>

      
      <Modal show={showModal} videoUrl={demoVideo} onClose={handleCloseModal} />
    </div>
  );
};

export default ProjectDetails;




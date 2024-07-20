import React, { useState } from 'react';
import Modal from './Modal';
import ModalImage from './ModalImage';
import { techIcons } from '../data/techIcons';
import { FaGithub } from 'react-icons/fa';
import '../css/ProjectDetails.css';
import { useLanguage } from '../context/LanguageContext';
import "../i18n";

interface GalleryImage {
  src: string;
  caption: string;
  isHalfWidth: boolean;
}

interface ProjectDetailsProps {
  name: string;
  subTitle?: string;
  description: string;
  image: string;
  demoVideo?: string;
  details: string[];
  galleryImages: GalleryImage[];
  technologies?: string[];
  repository?: { front: string; back: string };
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  name,
  subTitle,
  description,
  image,
  demoVideo,
  details,
  galleryImages,
  technologies = [],
  repository = { front: '', back: '' },
}) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const { translate } = useLanguage();

  const handleVideoClick = () => setShowVideoModal(true);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setShowImageModal(true);
  };

  const handleCloseModal = () => {
    setShowVideoModal(false);
    setShowImageModal(false);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : galleryImages.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < galleryImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="project-details">
      <header>
        <h1 className="project-details-title">{name}</h1>
        <p className="project-subtitle">{subTitle}</p>
        <div
          className="project-header-image-container"
          onClick={handleVideoClick}
        >
          <img
            src={image}
            alt={name}
            className="project-header-image"
          />
          <span className="project-demo-text">Demo</span>
        </div>
      </header>

      <section className="project-description">
        <p className="body-text">{description}</p>
      </section>

      {technologies.length > 0 && (
        <section className="project-technologies">
          <h2>{translate("projectsDetails.technologies")}</h2>
          <div className="technology-list">
            {technologies.map((tech, index) => {
              const IconComponent = techIcons[tech];
              return (
                <div key={index} className="technology">
                  {IconComponent ? <IconComponent /> : <span>{tech}</span>}
                  <div className="technology-label">{tech}</div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <section className="project-details-content">
        <h2>{translate("projectsDetails.detail")}</h2>
        <ul className="body-text">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </section>

      {(repository.front || repository.back) && (
        <section className="project-repository">
          <h2>{translate("projectsDetails.repository")}</h2>
          <ul className="body-text repository-list">
            {repository.front && (
              <li className="repository-item">
                <a
                  href={repository.front}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <FaGithub />
                Frontend
                 
                </a>
              </li>
            )}
            {repository.back && (
              <li className="repository-item">
                <a
                  href={repository.back}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <FaGithub />
                Backend
                </a>
              </li>
            )}
          </ul>
        </section>
      )}

      <section className="project-gallery">
        <h2>{translate("projectsDetails.gallery")}</h2>
        <div className="gallery-carousel">
          <div className="gallery-carousel-container">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="gallery-image-container"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="gallery-image"
                />
                <p className="image-caption">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        show={showVideoModal}
        videoUrl={demoVideo}
        onClose={handleCloseModal}
      />

      <ModalImage
        show={showImageModal}
        imageUrl={galleryImages[currentImageIndex].src}
        onClose={handleCloseModal}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  );
};

export default ProjectDetails;






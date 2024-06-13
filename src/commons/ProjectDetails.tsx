import React from 'react';
import '../css/ProjectDetails.css'; 


interface ProjectDetailsProps {
  name: string;
  description: string;
  headerImageSrc: string;
  details: string[];
  galleryImages: { src: string; caption: string; isHalfWidth?: boolean }[];
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  name,
  description,
  headerImageSrc,
  details,
  galleryImages
}) => (
  <div className="project-details-page">
    <div className="main-title">{name}</div>
    <div className="body-text">{description}</div>
    <img src={headerImageSrc} alt={name} className="project-header-image" />

    <div id="project-details">
      <div className="subheader-text">Project Details / Background</div>
      <div className="project-details-content">
        {details.map((detail, index) => (
          <div key={index} className="body-text">{detail}</div>
        ))}
      </div>
    </div>

    <div id="project-gallery">
      <div className="subheader-text">Image Gallery</div>
      <div className="project-gallery-content">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`gallery-image-container ${image.isHalfWidth ? 'half-width' : ''}`}
          >
            <img src={image.src} alt={image.caption} className="gallery-image" />
            <span className="image-caption">{image.caption}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectDetails;

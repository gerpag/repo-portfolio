import React from 'react';
import '../css/Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  onPrev: () => void;
  onNext: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, image, onPrev, onNext }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-image-container">
          <img src={image} alt={title} className="modal-image" />
        </div>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>
        <button className="nav-button nav-button-left" onClick={onPrev}>←</button>
        <button className="nav-button nav-button-right" onClick={onNext}>→</button>
      </div>
    </div>
  );
};

export default Modal;





/* import React from 'react';
import '../css/Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  onPrev: () => void;
  onNext: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, image, onPrev, onNext }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img src={image} alt={title} className="modal-image" />
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>
        <button className="nav-button nav-button-left" onClick={onPrev}>←</button>
        <button className="nav-button nav-button-right" onClick={onNext}>→</button>
      </div>
    </div>
  );
};

export default Modal;
 */
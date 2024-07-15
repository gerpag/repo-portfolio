import React from 'react';
import '../css/Modal.css';

interface ModalImageProps {
  show: boolean;
  imageUrl: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ModalImage: React.FC<ModalImageProps> = ({ show, imageUrl, onClose, onNext, onPrev }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <button className="prev-button" onClick={(e) => { e.stopPropagation(); onPrev(); }}>&lt;</button>
        <img src={imageUrl} alt="Gallery" className="modal-image" />
        <button className="next-button" onClick={(e) => { e.stopPropagation(); onNext(); }}>&gt;</button>
      </div>
    </div>
  );
};

export default ModalImage;



/* import React from 'react';
import '../css/Modal.css';

interface ModalImageProps {
  show: boolean;
  imageUrl: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ModalImage: React.FC<ModalImageProps> = ({ show, imageUrl, onClose, onNext, onPrev }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>x</button>
        <button className="prev-button" onClick={(e) => { e.stopPropagation(); onPrev(); }}>&lt;</button>
        <img src={imageUrl} alt="Gallery" className="modal-image" />
        <button className="next-button" onClick={(e) => { e.stopPropagation(); onNext(); }}>&gt;</button>
      </div>
    </div>
  );
};

export default ModalImage;

 */

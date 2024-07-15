import React from 'react';
import '../css/Modal.css';

interface ModalProps {
  show: boolean;
  videoUrl?: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, videoUrl, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="video-wrapper">
          <iframe
            src={videoUrl || ""}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;




/*  import React from 'react';
import '../css/Modal.css'; 


interface ModalProps {
  show: boolean;
  videoUrl: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, videoUrl, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>x</button>
        <div className="video-wrapper">
          <iframe
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
  */
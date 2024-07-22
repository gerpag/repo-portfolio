import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import '../css/BackButton.css';

const BackButton: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button className="back-button-fixed" onClick={goBack}>
      <FaArrowLeft />
    </button>
  );
};

export default BackButton;

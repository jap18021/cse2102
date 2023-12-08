import React from 'react';
import './LoyalVassals.css';

const OtterImageComponent = ({ imageLink }) => {
  return (
    <div className="otter-image-container">
      <img src={imageLink} alt="Otter" className="otter-image" />
    </div>
  );
};

export default OtterImageComponent;

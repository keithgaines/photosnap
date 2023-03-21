import React from 'react';
import './ImageCard.css'

const ImageComponent = ({ title, artist, backgroundImageSrc }) => {
  const wrapperStyle = {
    backgroundImage: `url(${backgroundImageSrc})`,
  };

  return (
    <div className="image-wrapper" style={wrapperStyle}>
      <div className="image-info">
        <h3 className="image-title">{title}</h3>
        <p className="image-artist"> by {artist}</p>
        </div>
        <hr />
      <div className="image-body">
        <p className="image-story">READ STORY</p>
        <img 
            className="image-arrow" 
            src='../assets/shared/desktop/arrow.svg' 
            alt="arrow" 
            preserveAspectRatio='none' />
      </div>
    </div>

  );
};

export default ImageComponent;

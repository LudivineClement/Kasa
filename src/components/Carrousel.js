import React, { useState } from 'react';
import arrowLeft from '../assets/arrow_left.png';
import arrowRight from '../assets/arrow_right.png';

const Carrousel = ({ housingData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((index) => (index === 0 ? housingData.pictures.length - 1 : index - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((index) => (index === housingData.pictures.length - 1 ? 0 : index + 1));
  };

  const currentImage = housingData.pictures[currentImageIndex];
  const imageCount = housingData.pictures.length;

  if (imageCount === 1) {
    return <img src={currentImage} alt={housingData.title} className='img_alone' />;
  }

  const displayImageCount = `${currentImageIndex + 1}/${imageCount}`;

  return (
    <div className="CarrouselContainer">
      <img src={currentImage} alt={housingData.title} />
      <div className="pagination">{displayImageCount}</div>
      <div>
        <img className="left-arrow" src={arrowLeft} alt="précédent" onClick={previousImage} />
        <img className="right-arrow" src={arrowRight} alt="suivant" onClick={nextImage} />
      </div>
    </div>
  );
};

export default Carrousel;

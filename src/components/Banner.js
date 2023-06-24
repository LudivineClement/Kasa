import React from "react";

function Banner({ imageUrl, text, isMobile }) {
  return (
    <div className={`banner ${isMobile ? 'styleMobile' : ''}`}>
        <div className="image-container">
        <img src={imageUrl} alt="Bannière" className={`${isMobile ? 'styleMobile' : ''}`} />

            <div className="text-overlay">
                <h2>{text}</h2>
            </div>
        </div>
    </div>
    )
  } 

export default Banner;
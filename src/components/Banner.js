import React from "react";

function Banner({ imageUrl, text }) {
  return (
    <div className="banner">
        <div className="image-container">
            <img src={imageUrl} alt="Bannière" />
            <div className="text-overlay">
                <h2>{text}</h2>
            </div>
        </div>
    </div>
    )
  } 

export default Banner;
import React from 'react'
import './CardBeforeAfter.css'; 

const CardBeforeAfter = ({ beforeImage, afterImage, beforeText, afterText }) => {
  return (
    <div className="cleaning-card">
      <div className="image-container before">
        <img src={beforeImage} alt="Before Cleaning" className="image"/>
        <p className="caption">{beforeText}</p>
      </div>
      <div className="divider">  </div> {/* Vertical divider added here */}
      <div className="image-container after">
        <img src={afterImage} alt="After Cleaning" className="image"/>
        <p className="caption">{afterText}</p>
      </div>
    </div>
  
);
  
}

export default CardBeforeAfter
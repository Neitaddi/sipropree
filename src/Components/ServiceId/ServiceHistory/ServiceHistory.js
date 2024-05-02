import React from "react";
import "./ServiceHistory.css";

const ServiceHistory = ({ service , beforeText, afterText }) => {
  return (
  
    <div className="cover">
      {service.imgs.map((image) => {
        return (
          <div className="cleaning-card">
          <div className="image-container before">
            <img src={image.imgB} alt="Before Cleaning" className="image"/>
            <p className="caption">{beforeText}</p>
          </div>
          <div className="divider">  </div> {/* Vertical divider added here */}
          <div className="image-container after">
            <img src={image.imgA} alt="After Cleaning" className="image"/>
            <p className="caption">{afterText}</p>
          </div>
          </div>
        );
        
      })}
 </div>
  );
};

export default ServiceHistory;

import React from "react";
import imageB from "./../../../image/service10.jpg";
import "./ServiceTimeHead.css";
const ServiceTimeHead = () => {
  return (
    <div className="ServiceTimeHead">
      <img src={imageB} alt="" srcset="" className="ServiceTimeHeadImage" />
      <div className="ServiceTimeHeadOverlay">
        <h1> 24/7 Services</h1>
        <h1>À votre porte !</h1>
        <h3>Fournir des services de la plus haute qualité</h3>
        <div className="ServiceTimeHeadBook">prenez rendez-vous</div>
      </div>
    </div>
  );
};

export default ServiceTimeHead;

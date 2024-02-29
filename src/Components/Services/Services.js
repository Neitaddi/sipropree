import React from "react";
import image1 from './../../image/service4.jpg'
const Services = () => {
  return (
    <div>
      <div className="Services">
        <img src={image1} alt="" srcset="" className="ServicesImage" />
        <div className="ServicesOverlay">
          <h1> 24/7 Services</h1>
          <h1>À votre porte !</h1>
          <h3>Fournir des services de la plus haute qualité</h3>
          <div className="ServicesBook">prenez rendez-vous</div>
        </div>
      </div>
    </div>
  );
};

export default Services;

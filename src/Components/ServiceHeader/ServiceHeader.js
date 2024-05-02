import React from "react";
import { Link } from "react-router-dom";
import "./ServiceHeader.css";
import { SlArrowRight } from "react-icons/sl";

const ServiceHeader = ({ serviceheader }) => {
  return (
    <div className="ServiceIdHeader">
      <img src={serviceheader.imgserviceheader} alt="" className="ServiceIdHeaderImage" />
      <div class="ServiceIdHeaderoverlay">
        <h1>{serviceheader.title}</h1>

        <p className="ServiceIdHeaderoverlayParagraph">
        {serviceheader.descserviceheader}
        </p>
        <div className="ServiceIdHeaderoverlayContact">
          <Link to="/" className="ServiceIdHeaderoverlayContactLink">
            <p>Acceuil</p>
          </Link>
          <SlArrowRight />
          <Link to="/service" className="ServiceIdHeaderoverlayContactLink">
            <p>services</p>
          </Link>
          
         
        </div>
      </div>
      
      
    </div>
  );
};

export default ServiceHeader;
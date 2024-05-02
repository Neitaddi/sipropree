import React from "react";
import { Link } from "react-router-dom";
import "./ServiceIdHeader.css";
import { SlArrowRight } from "react-icons/sl";

const ServiceIdHeader = ({ service }) => {
  return (
    <div className="ServiceIdHeader">
      <img src={service.img} alt="" className="ServiceIdHeaderImage" />
      <div class="ServiceIdHeaderoverlay">
        <h1>{service.title}</h1>

        <p className="ServiceIdHeaderoverlayParagraph">
        {service.Desc}
        </p>
        <div className="ServiceIdHeaderoverlayContact">
          <Link to="/" className="ServiceIdHeaderoverlayContactLink">
            <p>Acceuil</p>
          </Link>
          <SlArrowRight />
          <Link to="/services" className="ServiceIdHeaderoverlayContactLink">
            <p>Service</p>
          </Link>
          <SlArrowRight />
          <p className="ServiceIdHeaderLink">{service.title} </p>
        </div>
      </div>
      
      
    </div>
  );
};

export default ServiceIdHeader;

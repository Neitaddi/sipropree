import React from "react";
import { Link } from "react-router-dom";

import { SlArrowRight } from "react-icons/sl";
import "./AproposHeader.css"

const AproposHeader = ({ aproposheader }) => {
  return (
    <div className="ServiceIdHeader">
      <img src={aproposheader.imgApropos} alt="" className="ServiceIdHeaderImage" />
      <div class="ServiceIdHeaderoverlay">
        <h1>{aproposheader.title}</h1>

        <p className="ServiceIdHeaderoverlayParagraph">
        {aproposheader.descApropos}
        </p>
        <div className="ServiceIdHeaderoverlayContact">
          <Link to="/" className="ServiceIdHeaderoverlayContactLink">
            <p>Acceuil</p>
          </Link>
          <SlArrowRight />
          <Link to="/contact" className="ServiceIdHeaderoverlayContactLink">
            <p>A propos</p>
          </Link>
          
         
        </div>
      </div>
      
      
    </div>
  );
};

export default AproposHeader;
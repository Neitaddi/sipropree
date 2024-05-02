import React from "react";
import { Link } from "react-router-dom";
import "./ContactHeader.css";
import { SlArrowRight } from "react-icons/sl";

const ContactHeader = ({ contact }) => {
  return (
    <div className="ServiceIdHeader">
      <img src={contact.imgContact} alt="" className="ServiceIdHeaderImage" />
      <div class="ServiceIdHeaderoverlay">
        <h1>{contact.title}</h1>

        <p className="ServiceIdHeaderoverlayParagraph">
        {contact.descContact}
        </p>
        <div className="ServiceIdHeaderoverlayContact">
          <Link to="/" className="ServiceIdHeaderoverlayContactLink">
            <p>Acceuil</p>
          </Link>
          <SlArrowRight />
          <Link to="/contact" className="ServiceIdHeaderoverlayContactLink">
            <p>Contact</p>
          </Link>
          
         
        </div>
      </div>
      
      
    </div>
  );
};

export default ContactHeader;

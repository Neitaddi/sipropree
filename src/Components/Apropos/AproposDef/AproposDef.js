import React from "react";
import { Link } from "react-router-dom";

import { SlArrowRight } from "react-icons/sl";
import "./AproposDef.css";
import persona from "../../../image/person1.jpg";
import personb from "../../../image/person2.jpg";
import personc from "../../../image/person3.jpg";
import persond from "../../../image/person4.jpg";

const AproposDef = ({ aproposheader }) => {
  return (
    <div className="AproposDef">
      {/* <img src={aproposheader.imgApropos} alt="" className="AproposDefImage" /> */}
      <div class="AproposDefoverlay">
        <h1 className="heading">SI PROPRE</h1>

        <p className="AproposDefoverlayParagraph">
          {aproposheader.defApropos1}
        </p>
        <div className="AproposDefb">
          <div className="AproposDefLeft"> {aproposheader.defApropos2} </div>
          <div className="AproposDefRigth">
            <div className="flexAproposDefb">
              <h1>Date de création :</h1> <p>Le 23/10/2023</p>
            </div>
            <div className="flexAproposDefb">
              <h1>Siège social :</h1>{" "}
              <p>115 chemin de lanusse, 31200 Toulouse</p>
            </div>
            <div className="flexAproposDefb">
              <h1>Contact :</h1> <p> Sipropre19@outlook.fr</p>
            </div>
            <div className="flexAproposDefb">
              <h1> Tél :</h1> <p> +33 6 05 53 93 68</p>
            </div>{" "}
          </div>
        </div>

        <div className="circle-imagediv">
          <img src={persona} alt="Team Member Name" className="circle-image" />
          <img src={personb} alt="Team Member Name" className="circle-image" />
          <img src={personc} alt="Team Member Name" className="circle-image" />
          <img src={persond} alt="Team Member Name" className="circle-image" />
        </div>
      </div>
    </div>
  );
};

export default AproposDef;

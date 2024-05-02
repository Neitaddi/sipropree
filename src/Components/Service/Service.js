import React from "react";
import img from "./../../image/bureaux.jpg";
import "./Service.css";
import ServicesDiv from "./../ServicesDiv/ServicesDiv";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  console.log("hello4", service);

  return (
    <div className="ServiceCard"> 
      {" "}
      <div className="ServiceCardImgDiv" key={service.id}>
        <img src={service.img} alt="" srcset="" className="ServiceCardImg" />
      </div>{" "}
      <h1 className="ServiceCardHeading">{service.title}</h1>
      <p className="ServiceCardDesc">{service.Desc}</p>
      <Link to={`/service/${service.id}`} className="ServiceCardRead">
       VOIR PLUS..{" "}
      </Link>
    </div>
  );
};

export default Service;

import React from "react";
import HeadingAcceuil from "./HeadingAcceuil/HeadingAcceuil";


import "./Acceuil.css";
import ServiceTimeHead from "./ServiceTimeHead/ServiceTimeHead";
import ServicesDiv from "../ServicesDiv/ServicesDiv";
const Acceuil = () => {
  return (
    <div>
      <HeadingAcceuil />
      <ServicesDiv />
      <ServiceTimeHead />
    </div>
  );
};

export default Acceuil;

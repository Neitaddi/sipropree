import React from "react";
import image1 from './../../image/service4.jpg'
import ServiceTimeHead from "../Acceuil/ServiceTimeHead/ServiceTimeHead";
import ServicesDiv from "../ServicesDiv/ServicesDiv";
import ServiceHeader from "../ServiceHeader/ServiceHeader";
const Services = () => {
  const serviceheader ={
    imgserviceheader:image1,
    title:"SERVICES",
    descserviceheader: "Faites appel à notre entreprise pour nettoyer vos divers locaux."
  }
  return (
    <div>

    <ServiceHeader serviceheader={serviceheader} />
    
    <ServicesDiv/>
    <ServiceTimeHead />

    </div>
  );
};

export default Services;

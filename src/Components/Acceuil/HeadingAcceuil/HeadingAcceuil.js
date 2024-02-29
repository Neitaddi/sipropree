import React from "react";
import "./HeadingAcceuil.css";
import image1 from "../../../image/header.jpg";
import { Link } from "react-router-dom";

const HeadingAcceuil = () => {
  return (
    <div className="headingAcceuil">
      <img src={image1} alt="" className="headingAcceuilImage" />
      <div class="headingAcceuiloverlay">
        <h1>
          Bienvenue Chez <span>SiPropre</span>
        </h1>

        <p className="headingAcceuiloverlayParagraph">
          SiPropre est une société de nettoyage basée à Toulouse, spécialisée
          dans la fourniture de services de nettoyage professionnels pour une
          variété de secteurs. Forts d'une équipe expérimentée et dévouée, nous
          nous engageons à offrir des solutions de nettoyage de haute qualité
          adaptées aux besoins spécifiques de chaque client.
        </p>
        <div className="contact">
          {" "}
          <Link >Contactez Nous</Link>
        </div>
      </div>
    </div>
  );
};

export default HeadingAcceuil;

import React from "react";
import image1 from "./../../image/bureaux.jpg";
import image2 from "./../../image/commerce.jpg";
import image3 from "./../../image/Décapagesol.jpg";
import image4 from "./../../image/industriel.jpg";
import image5 from "./../../image/moquette.jpg";
import image6 from "./../../image/parking.jpg";
import image7 from "./../../image/résidentiel.jpg";
import image8 from "./../../image/des vitres.jpg";
import image9 from "./../../image/service11.jpg";
import Service from "../Service/Service";
import "./ServicesDiv.css";

const ServicesDiv = () => {
 const services = [
   {
     id: 0,
     img: image1,
     title: "Nettoyage de bureaux",
     Desc: "Electronic typesetting rema essentially unchanged was popularised.",
     imgs: [
       { imgB: image1, imgA: image2 },
       { imgB: image3, imgA: image4 },
       { imgB: image5, imgA: image6 },
       { imgB: image7, imgA: image8 },
     ],
   },
   {
     id: 1,
     img: image4,
     title: "Nettoyage industriel",
     Desc: "Electronic typesetting rema essentially unchanged was popularised.",
     imgs: [
       { imgB: image1, imgA: image2 },
       { imgB: image3, imgA: image4 },
       { imgB: image5, imgA: image6 },
       { imgB: image7, imgA: image8 },
     ],
   },
   {
     id: 2,
     img: image8,
     title: "Nettoyage des vitres",
     Desc: "Electronic typesetting rema essentially unchanged was popularised.",
     imgs: [
       { imgB: image1, imgA: image2 },
       { imgB: image3, imgA: image4 },
       { imgB: image5, imgA: image6 },
       { imgB: image7, imgA: image8 },
     ],
   },
   {
     id: 3,
     img: image6,
     title: "Nettoyage des parking",
     Desc: "Electronic typesetting rema essentially unchanged was popularised.",
     imgs: [
       { imgB: image1, imgA: image2 },
       { imgB: image3, imgA: image4 },
       { imgB: image5, imgA: image6 },
       { imgB: image7, imgA: image8 },
     ],
   },
   {
     id: 4,
     img: image9,
     title: "Les remises en état",
     Desc: "Electronic typesetting rema essentially unchanged was popularised.",
     imgs: [
       { imgB: image1, imgA: image2 },
       { imgB: image3, imgA: image4 },
       { imgB: image5, imgA: image6 },
       { imgB: image7, imgA: image8 },
     ],
   },
   {
     id: 5,
     img: image3,
     title: "Décapage sol",
     Desc: "Electronic typesetting rema essentially unchanged was popularised.",
     imgs: [
       { imgB: image1, imgA: image2 },
       { imgB: image3, imgA: image4 },
       { imgB: image5, imgA: image6 },
       { imgB: image7, imgA: image8 },
     ],
   },
   {
     id: 6,
     img: image7,
     title: "Nettoyage résidentiel",
     Desc: "Electronic typesetting rema essentially unchanged was popularised.",
     imgs: [
       { imgB: image1, imgA: image2 },
       { imgB: image3, imgA: image4 },
       { imgB: image5, imgA: image6 },
       { imgB: image7, imgA: image8 },
     ],
   },
   {
     id: 7,
     img: image5,
     title: "Shampoing moquette",
     Desc: "Electronic typesetting rema essentially unchanged was popularised.",
     imgs: [
       { imgB: image1, imgA: image2 },
       { imgB: image3, imgA: image4 },
       { imgB: image5, imgA: image6 },
       { imgB: image7, imgA: image8 },
     ],
   },
   {
     id: 8,
     img: image2,
     title: "Nettoyage de commerce",
     Desc: "Electronic typesetting rema essentially unchanged was popularised.",
     imgs: [
       { imgB: image1, imgA: image2 },
       { imgB: image3, imgA: image4 },
       { imgB: image5, imgA: image6 },
       { imgB: image7, imgA: image8 },
     ],
   },
 ];

  return (
    <div className="ServiceDiv">
      <div className="OverlyServicesDiv">
        <h3>Nos services</h3>
        <h1>VOUS POUVEZ DÉPENDRE DE NOUS POUR OBTENIR DE BONS SERVICES</h1>
      </div>
      <div className="ListServicesDiv">
        {services.map((service) => {
          return <Service service={service} />;
        })}
      </div>
    </div>
  );
};

export default ServicesDiv;

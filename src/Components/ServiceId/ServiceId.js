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
import { useParams } from "react-router-dom";
import ServiceIdHeader from "./ServiceIdHeader/ServiceIdHeader";
import "./ServiceId.css";
import ServiceList from "./ServiceList/ServiceList";
import ServiceHistory from "./ServiceHistory/ServiceHistory";
const ServiceId = () => {
  const { id } = useParams();
  const serviceId = parseInt(id);
  // console.log("hello", id);
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
      detail:
        "Carthago Services est à votre disposition pour tous vos travaux de jardinage en Tunisie et pour réaliser l’aménagement et l’entretien de vos espaces verts. Nous mettons à votre service tout notre savoir-faire et nos connaissances en matière de jardinage afin de transformer vos espaces verts et les rendre plus accueillants tout au long de l’année. Vous pouvez nous contacter à tout moment pour demander une intervention ou si vous souhaitez avoir plus d’informations sur nos services.",

      objectifSer: [
        "La réalisation des travaux d’aménagement de vos espaces verts : plantation d’arbres, pose de haies et de clôtures, engazonnement, dallage, création de terrasse",
        "L’entretien des espaces verts privés et publics : jardins, cours, parcs",
        "Tailler vos arbres et vos pelouses, soigner vos plantes",
        "Vous accompagner et vous conseiller pour le choix de vos plantes, de vos arbustes, de vos dalles, etc.",
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
      detail:
        "Carthago Services est à votre disposition pour tous vos travaux de jardinage en Tunisie et pour réaliser l’aménagement et l’entretien de vos espaces verts. Nous mettons à votre service tout notre savoir-faire et nos connaissances en matière de jardinage afin de transformer vos espaces verts et les rendre plus accueillants tout au long de l’année. Vous pouvez nous contacter à tout moment pour demander une intervention ou si vous souhaitez avoir plus d’informations sur nos services.",

      objectifSer: [
        "La réalisation des travaux d’aménagement de vos espaces verts : plantation d’arbres, pose de haies et de clôtures, engazonnement, dallage, création de terrasse",
        "L’entretien des espaces verts privés et publics : jardins, cours, parcs",
        "Tailler vos arbres et vos pelouses, soigner vos plantes",
        "Vous accompagner et vous conseiller pour le choix de vos plantes, de vos arbustes, de vos dalles, etc.",
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
      detail:
        "Carthago Services est à votre disposition pour tous vos travaux de jardinage en Tunisie et pour réaliser l’aménagement et l’entretien de vos espaces verts. Nous mettons à votre service tout notre savoir-faire et nos connaissances en matière de jardinage afin de transformer vos espaces verts et les rendre plus accueillants tout au long de l’année. Vous pouvez nous contacter à tout moment pour demander une intervention ou si vous souhaitez avoir plus d’informations sur nos services.",

      objectifSer: [
        "La réalisation des travaux d’aménagement de vos espaces verts : plantation d’arbres, pose de haies et de clôtures, engazonnement, dallage, création de terrasse",
        "L’entretien des espaces verts privés et publics : jardins, cours, parcs",
        "Tailler vos arbres et vos pelouses, soigner vos plantes",
        "Vous accompagner et vous conseiller pour le choix de vos plantes, de vos arbustes, de vos dalles, etc.",
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
      detail:
        "Carthago Services est à votre disposition pour tous vos travaux de jardinage en Tunisie et pour réaliser l’aménagement et l’entretien de vos espaces verts. Nous mettons à votre service tout notre savoir-faire et nos connaissances en matière de jardinage afin de transformer vos espaces verts et les rendre plus accueillants tout au long de l’année. Vous pouvez nous contacter à tout moment pour demander une intervention ou si vous souhaitez avoir plus d’informations sur nos services.",

      objectifSer: [
        "La réalisation des travaux d’aménagement de vos espaces verts : plantation d’arbres, pose de haies et de clôtures, engazonnement, dallage, création de terrasse",
        "L’entretien des espaces verts privés et publics : jardins, cours, parcs",
        "Tailler vos arbres et vos pelouses, soigner vos plantes",
        "Vous accompagner et vous conseiller pour le choix de vos plantes, de vos arbustes, de vos dalles, etc.",
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
      detail:
        "Carthago Services est à votre disposition pour tous vos travaux de jardinage en Tunisie et pour réaliser l’aménagement et l’entretien de vos espaces verts. Nous mettons à votre service tout notre savoir-faire et nos connaissances en matière de jardinage afin de transformer vos espaces verts et les rendre plus accueillants tout au long de l’année. Vous pouvez nous contacter à tout moment pour demander une intervention ou si vous souhaitez avoir plus d’informations sur nos services.",

      objectifSer: [
        "La réalisation des travaux d’aménagement de vos espaces verts : plantation d’arbres, pose de haies et de clôtures, engazonnement, dallage, création de terrasse",
        "L’entretien des espaces verts privés et publics : jardins, cours, parcs",
        "Tailler vos arbres et vos pelouses, soigner vos plantes",
        "Vous accompagner et vous conseiller pour le choix de vos plantes, de vos arbustes, de vos dalles, etc.",
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
      detail:
        "Carthago Services est à votre disposition pour tous vos travaux de jardinage en Tunisie et pour réaliser l’aménagement et l’entretien de vos espaces verts. Nous mettons à votre service tout notre savoir-faire et nos connaissances en matière de jardinage afin de transformer vos espaces verts et les rendre plus accueillants tout au long de l’année. Vous pouvez nous contacter à tout moment pour demander une intervention ou si vous souhaitez avoir plus d’informations sur nos services.",

      objectifSer: [
        "La réalisation des travaux d’aménagement de vos espaces verts : plantation d’arbres, pose de haies et de clôtures, engazonnement, dallage, création de terrasse",
        "L’entretien des espaces verts privés et publics : jardins, cours, parcs",
        "Tailler vos arbres et vos pelouses, soigner vos plantes",
        "Vous accompagner et vous conseiller pour le choix de vos plantes, de vos arbustes, de vos dalles, etc.",
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
      detail:
        "Carthago Services est à votre disposition pour tous vos travaux de jardinage en Tunisie et pour réaliser l’aménagement et l’entretien de vos espaces verts. Nous mettons à votre service tout notre savoir-faire et nos connaissances en matière de jardinage afin de transformer vos espaces verts et les rendre plus accueillants tout au long de l’année. Vous pouvez nous contacter à tout moment pour demander une intervention ou si vous souhaitez avoir plus d’informations sur nos services.",

      objectifSer: [
        "La réalisation des travaux d’aménagement de vos espaces verts : plantation d’arbres, pose de haies et de clôtures, engazonnement, dallage, création de terrasse",
        "L’entretien des espaces verts privés et publics : jardins, cours, parcs",
        "Tailler vos arbres et vos pelouses, soigner vos plantes",
        "Vous accompagner et vous conseiller pour le choix de vos plantes, de vos arbustes, de vos dalles, etc.",
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
      detail:
        "Carthago Services est à votre disposition pour tous vos travaux de jardinage en Tunisie et pour réaliser l’aménagement et l’entretien de vos espaces verts. Nous mettons à votre service tout notre savoir-faire et nos connaissances en matière de jardinage afin de transformer vos espaces verts et les rendre plus accueillants tout au long de l’année. Vous pouvez nous contacter à tout moment pour demander une intervention ou si vous souhaitez avoir plus d’informations sur nos services.",

      objectifSer: [
        "La réalisation des travaux d’aménagement de vos espaces verts : plantation d’arbres, pose de haies et de clôtures, engazonnement, dallage, création de terrasse",
        "L’entretien des espaces verts privés et publics : jardins, cours, parcs",
        "Tailler vos arbres et vos pelouses, soigner vos plantes",
        "Vous accompagner et vous conseiller pour le choix de vos plantes, de vos arbustes, de vos dalles, etc.",
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
      detail:
        "Carthago Services est à votre disposition pour tous vos travaux de jardinage en Tunisie et pour réaliser l’aménagement et l’entretien de vos espaces verts. Nous mettons à votre service tout notre savoir-faire et nos connaissances en matière de jardinage afin de transformer vos espaces verts et les rendre plus accueillants tout au long de l’année. Vous pouvez nous contacter à tout moment pour demander une intervention ou si vous souhaitez avoir plus d’informations sur nos services.",

      objectifSer: [
        "La réalisation des travaux d’aménagement de vos espaces verts : plantation d’arbres, pose de haies et de clôtures, engazonnement, dallage, création de terrasse",
        "L’entretien des espaces verts privés et publics : jardins, cours, parcs",
        "Tailler vos arbres et vos pelouses, soigner vos plantes",
        "Vous accompagner et vous conseiller pour le choix de vos plantes, de vos arbustes, de vos dalles, etc.",
      ],
    },
  ];

  const service = services.find((servicee) => servicee.id === serviceId);
  // console.log("hello2", service);
  // console.log("hi", id);
  return (
    <div className="ServiceId">
    
    
      {service ? (
        <div>
          <ServiceIdHeader service={service} />
          <div className="ServiceIdMain">
            <div className="ServiceIdNoServices">
              <h1>Nos Services</h1>
              {services.map((serviceList) => {
                return <ServiceList serviceList={serviceList} />;
              })}
            </div>
            <div className="ServiceIdDetail">
              <p className="ServiceIdDetailP">{service.detail}</p>
              <div className="ServiceIdDetailImage">
                <ServiceHistory service={service} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div> error</div>
      )}
    </div>
  );
};

export default ServiceId;

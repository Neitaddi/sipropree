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
      Desc: "Si propre est une entreprise de nettoyage de bureaux Toulouse qui s'engage à vous garantir une propreté extrême et une hygiène totale",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
      detail:
        "Elle propose un service de nettoyage de bureaux professionnel et personnalisé pour répondre aux besoins spécifiques de chaque client. Son équipe assure un nettoyage en profondeur des bureaux, des salles de réunion, des cuisines et des espaces communs.",

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
      Desc: "Si Propre est une société de nettoyage en, offre un service de nettoyage industriel pour tous types d&#39;entreprises industriels.",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
      detail:
        "Si Propre assure le nettoyage et l'entretien des installations industrielles, des entrepôts, des usines et des sites de production.",

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
      Desc: "À la recherche d'une société de nettoyage spécialisée dans le nettoyage de vitres à Toulouse ? SiPropre vous assure une transparence éclatante pour une vue impeccable.",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
      detail:
        "entreprise garantit des surfaces vitrées impeccables et transparentes.Son équipe utilise des techniques de nettoyage professionnelles et des produits spécifiques pour éliminer efficacement la saleté, la poussière et les traces sur les fenêtres, les baies vitrées et les vitrines.",

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
      Desc: "SiPropre propose un service de nettoyage de parkings à Toulouse pour maintenir vos espaces de stationnement impeccables et accueillants.",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
      detail:
        "Si Propre assure le nettoyage et l&#39;entretien des parkings pour garantir  des espaces de stationnement propres, sûrs et accueillants. Elle utilise des équipements  spécialisés et des techniques de nettoyage avancées pour éliminer les débris, les taches d'huile  et les résidus de saleté des surfaces en béton ou en asphalte.",

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
      Desc: "Avec SiPropre, redonnez vie à vos espaces grâce à notre service de remise en état à Toulouse, pour un environnement propre et rafraîchi.",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
      detail:
        "Elle propose un service de remise en état pour restaurer l'aspect neuf de vos locaux commerciaux ou résidentiels. Elle intervient après des travaux de construction ou de  rénovation pour éliminer les débris, les traces de peinture et les résidus de colle, et pour  nettoyer en profondeur les surfaces et les espaces intérieurs.",

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
      Desc: "SiPropre offre un service de décapage de sols à Toulouse pour éliminer efficacement les traces et les salissures, laissant vos sols comme neufs.",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
      detail:
        "Si Propre offre un service professionnel de décapage de sols pour éliminer les revêtements anciens, les couches de cire et les imperfections des sols. Elle utilise des  équipements de décapage spécialisés et des produits chimiques adaptés pour rénover la brillance des sols en pierre, en carrelage ou en vinyle.",

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
      Desc: "En quête d'une société de nettoyage spécialisée en nettoyage de résidences à Toulouse ? Chez SiPropre optez d'un nettoyage de qualité !",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
      detail:
        "Si Propre prend en charge le nettoyage et l'entretien de tous types de logements, des appartements aux maisons individuelles. Son équipe professionnelle assure unettoyage soigneux des pièces principales, des salles de bains, des cuisines et des espaces de vie, en utilisant des produits de nettoyage écologiques et respectueux de l'environnement.",

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
      Desc: "Confiez le nettoyage de vos moquettes à SiPropre à Toulouse pour un shampoing en profondeur qui redonne éclat et fraîcheur à vos revêtements textiles.",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
      detail:
        "entreprise propose un service de shampoing de moquette pour éliminer les taches, les odeurs et les allergènes des revêtements textiles. Son équipe utilise des machines d'injection-extraction et des produits de nettoyage spécifiques pour nettoyer en  profondeur les fibres de la moquette, en préservant leur couleur et leur texture.",

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
      Desc: "SiPropre assure un nettoyage professionnel des commerces à Toulouse, pour des espaces accueillants et impeccables qui séduiront vos clients.",
      imgs: [
        { imgB: image1, imgA: image2 },
        { imgB: image3, imgA: image4 },
        { imgB: image5, imgA: image6 },
        { imgB: image7, imgA: image8 },
      ],
      detail:
        "Si Propre assure le nettoyage et l'entretien des commerces, des boutiques et des espaces commerciaux pour garantir une présentation impeccable et attrayante.",

      objectifSer: [
        "La réalisation des travaux d’aménagement de vos espaces verts : plantation d’arbres, pose de haies et de clôtures, engazonnement, dallage, création de terrasse",
        "L’entretien des espaces verts privés et publics : jardins, cours, parcs",
        "Tailler vos arbres et vos pelouses, soigner vos plantes",
        "Vous accompagner et vous conseiller pour le choix de vos plantes, de vos arbustes, de vos dalles, etc.",
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

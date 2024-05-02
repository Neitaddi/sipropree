import React from "react";
import AproposHeader from "./AproposHeader/AproposHeader";
import img from "../../image/service1.jpg";
import AproposDef from "./AproposDef/AproposDef";
import persona from "../../image/person1.jpg";
import personb from "../../image/person2.jpg";
import personc from "../../image/person3.jpg";
import persond from "../../image/person4.jpg";

const Apropos = () => {
  const aproposheader = {
    imgApropos: img,
    title: "A PROPOS",
    descApropos:
      "Un service de nettoyages spécifiques pour vos besoins particuliers ",
    defApropos1:
      " est une société de nettoyage basée à Toulouse, spécialisée dans la fourniture de services de nettoyage professionnels pour une variété de secteurs. Forts d'une équipe expérimentée et dévouée, nous nous engageons à offrir de  solutions de nettoyage de haute qualité adaptées aux besoins spécifiques de chaque client.",
    defApropos2:
      "Chez SiPropre, nous combinons des techniques de nettoyage efficaces avec des produits respectueux de l'environnement pour garantir des résultats impeccables tout en préservant la santé et la sécurité de nos clients et de leurs espaces. Notre   engagement envers l'excellence, la fiabilité et la satisfaction du client fait de nous le  partenaire idéal pour tous vos besoins en matière de nettoyage à Toulouse et ses  environs",
    imgPerson: [
      { persona: persona },
      { personb: personb },
      { personc: personc },
      { persond: persond },
    ],
  };

  return (
    <div>
      <AproposHeader aproposheader={aproposheader} />

      <AproposDef aproposheader={aproposheader} />
    </div>
  );
};

export default Apropos;

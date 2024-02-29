import React from "react";
import "./Footer.css";
import { SlControlEnd, SlEnvolope } from "react-icons/sl";

import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterContainer">
        <div className="footerCard">
          <h3 className="titleFooterCard">A PROPOS</h3>
          <p className="titleFooterCardescreption">
            Confiez vos travaux de nettoyage à des experts ! Hygiène et propreté
            de vos locaux professionnels Une Equipe formée à votre disposition.
          </p>
          <div className="titleFooterCardButton">
            <p>Contactez-nous</p>
          </div>
        </div>
        <div className="footerCard">
          {" "}
          <h3 className="titleFooterCard">Nos Services</h3>
          <div className="footerCardsLink">
            <p className="footerCardLink">
              <SlControlEnd className="si" /> Nettoyage industriel
            </p>
            <p className="footerCardLink">
              {" "}
              <SlControlEnd className="si" />
              Nettoyage résidentiel
            </p>
            <p className="footerCardLink">
              {" "}
              <SlControlEnd className="si" />
              Nettoyage de bureaux
            </p>
            <p className="footerCardLink">
              {" "}
              <SlControlEnd className="si" />
              Nettoyage des vitres
            </p>
            <p className="footerCardLink">
              {" "}
              <SlControlEnd className="si" />
              Nettoyage des parking
            </p>
            <p className="footerCardLink">
              {" "}
              <SlControlEnd className="si" />
              Les remises en état
            </p>
            <p className="footerCardLink">
              {" "}
              <SlControlEnd className="si" />
              Décapage sol
            </p>
            <p className="footerCardLink">
              {" "}
              <SlControlEnd className="si" />
              Shampoing moquette
            </p>
            <p className="footerCardLink">
              {" "}
              <SlControlEnd className="si" />
              Nettoyage de commerce
            </p>
          </div>
        </div>
        <div className="footerCard">
          {" "}
          <h3 className="titleFooterCard">Contact Rapide</h3>
          <p className="textFooterCardMail">
            <SlEnvolope className="si" /> Sipropre19@outlook.fr
          </p>
          <p className="textFooterCardTel">
            <FaPhoneAlt className="si" />
            07.58.98.09.42
          </p>
        </div>
        <div className="footerCard">
          {" "}
          <h3 className="titleFooterCard">Horaire de travail</h3>
          <p className="textFooterCardH">
            <MdAccessTime className="si" />
            24H/24 - 7j/7
          </p>
        </div>
      </div>
      <div className="FooterMentionLegale">
        <p>
          © 2021 – SI PROPRE – (Entreprise de nettoyage à Toulouse) – Tous
          droits réservés – Mentions Légales
        </p>
      </div>
    </div>
  );
};

export default Footer;

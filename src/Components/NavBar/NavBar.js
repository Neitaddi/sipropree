import React from "react";
import logo from "../../image/logo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";


const NavBar = ({ services }) => {
  return (
    <div>
      <header>
        <div className="navbar">
          <img src={logo} alt="" srcset="" className="logo" />

          <ul className="navigatorLink">
            <li className="linkSipropre">
              <Link to="/" className="linkSipropreLink ">
                Acceuil
              </Link>
            </li>
            <li className="linkSipropre">
              <Link to="/contact" className="linkSipropreLink ">
                A propos
              </Link>
            </li>
 
            <li className="linkSipropre service">
              <Link to="/services" className="linkSipropreLink ">
                Services
              </Link>
              <ul className="dropdowndownServices">
                {services.map((service) => {
                  return (
                    <li key={service.id} className="dropdownServicesList">
                      <Link to={`/service/${service.id}`}>{service.title}</Link>
                    </li>
                  );
                })}{" "}
              </ul>
            </li>
          </ul>
          <ul className="rendezvousNavbar">
            <li className="rendezvousNavbarLink">
              <Link>Planifier un rendez-vous</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import "./ServiceList.css";
import { SlArrowRight } from "react-icons/sl";

const ServiceList = ({ serviceList }) => {
  console.log("serviceList", serviceList);
  return (
    <div className="ServiceList">
      <Link to={`/service/${serviceList.id}`}>
        <ul className="ServiceListName">
          <SlArrowRight />
          <li>{serviceList.title}</li>
        </ul>
      </Link>
    </div>
  );
};

export default ServiceList;

import React from "react";
import "./ServiceHistory.css";

const ServiceHistory = ({ service }) => {
  return (
    <div className="ServiceHistory">
      <div className="ServiceHistoryTitle">
        <h1 className="ServiceHistoryImagesBeforeText"> Avant</h1>
        <h1 className="ServiceHistoryImagesAfterText">Apres</h1>
      </div>
      {service.imgs.map((image) => {
        return (
          <div className="ServiceHistoryImages">
            <div className="ServiceHistoryImagesBefore">
              <img src={image.imgB} alt="" />
            </div>
            <div className="vertical"></div>
            <div className="ServiceHistoryImagesAfter">
              <img src={image.imgA} alt="" className="imhh"/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceHistory;

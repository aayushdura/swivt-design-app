import React from "react";
import CatalogueCard from "../ReusableCards/CatalogueCard";
import "./Catalogue.scss";
import { cataloguesItems } from "../../utils/staticData";

const Catalogue: React.FC = () => {
  return (
    <div className="catalogue-wrapper">
      <h2 className="catalogue-title">Catalog sections delicacies</h2>
      <div className="catalogue-card-container">
        {cataloguesItems.map((item, index) => (
          <CatalogueCard
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalogue;

import React from "react";
import CatalogueCard, {
  catalogueCardProps,
} from "../ProductCards/CatalogueCard";
import "./Catalogue.scss"
import catalogueItemImage from "../../Wireframes/thakali-e1603614702519 1.png";

const Catalogue:React.FC = () => {
  let cataloguesItems: Array<catalogueCardProps> = [
    { title: "Breakfast sets", imageSrc: catalogueItemImage },
    { title: "Nepal Lunch Set", imageSrc: catalogueItemImage },
    { title: "Soft Drinks", imageSrc: catalogueItemImage },
    { title: "Sea Foods", imageSrc: catalogueItemImage },
    { title: "Coffee", imageSrc: catalogueItemImage },
    { title: "Lunch, Breakfast, Dinner", imageSrc: catalogueItemImage },
    { title: "Lunch, Breakfast, Dinner", imageSrc: catalogueItemImage },
    { title: "Lunch, Breakfast, Dinner", imageSrc: catalogueItemImage },
    { title: "Lunch, Breakfast, Dinner", imageSrc: catalogueItemImage },
    { title: "Lunch, Breakfast, Dinner", imageSrc: catalogueItemImage },
    { title: "Lunch, Breakfast, Dinner", imageSrc: catalogueItemImage },
    { title: "Lunch, Breakfast, Dinner", imageSrc: catalogueItemImage },
    { title: "Soft Drinks", imageSrc: catalogueItemImage },
    { title: "Soft Drinks", imageSrc: catalogueItemImage },
  ];

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

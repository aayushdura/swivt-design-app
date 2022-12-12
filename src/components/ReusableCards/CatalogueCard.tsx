import React from "react";
import "./CatalogueCard.scss"
export interface catalogueCardProps {
  title: string;
  imageSrc: string;
}
const CatalogueCard: React.FC<catalogueCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="wrapper">
      <div className="image-container">
        <img src={imageSrc} alt="card"/>
      </div>
      <p className="para">{title}</p>
    </div>
  );
};

export default CatalogueCard;

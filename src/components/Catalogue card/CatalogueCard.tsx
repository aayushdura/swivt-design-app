import React from "react";

export interface catalogueCardProps {
  title: string;
  imageSrc: string;
}
const CatalogueCard: React.FC<catalogueCardProps> = ({ imageSrc, title }) => {
  return (
    <>
      <div className="image-container">
        <img src={imageSrc} />
      </div>
      <p>{title}</p>
    </>
  );
};

export default CatalogueCard;

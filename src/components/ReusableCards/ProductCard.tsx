import React from "react";
import Button from "../Button/Button";
import { productType } from "../PopularSection/PopularSection";
import "./PopularCard.scss"
const ProductCard: React.FC<productType> = ({
  itemTitle,
  discountedPrice,
  orgPrice,
  currency,
  image,
}) => {
  return (
    <div className="card-wrapper">
      <img src={image} alt="food-item" />
      <p className="product-title">{itemTitle}</p>
      <div className="price-btn-wrapper">
        <div className="price-wrapper">
          <span>{`${currency}${discountedPrice}`}</span>
          <span>{`${currency}${orgPrice}`}</span>
        </div>
        <Button primary={false}>Add</Button>
      </div>
    </div>
  );
};

export default ProductCard;

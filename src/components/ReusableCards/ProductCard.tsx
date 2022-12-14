import React from "react";
import Button from "../Button/Button";
import { productType } from "../PopularSection/PopularSection";
import SaleSRibbon from "../ReusableBlocks/SaleSRibbon";
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
      {/* <SaleSRibbon discount={20}/> */}
      <p className="product-title">{itemTitle}</p>
      <div className="price-btn-wrapper">
        <div className="price-wrapper">
          <span className="discounted-price">{`${currency}${discountedPrice}`}</span>
          <span className="old-price">{`${currency}${orgPrice}`}</span>
        </div>
        <Button primary={false}>Add</Button>
      </div>
    </div>
  );
};

export default ProductCard;

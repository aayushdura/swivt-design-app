import React from "react";
import ProductCard from "../ReusableCards/ProductCard";

import "./PopularSection.scss";
export interface productType {
  itemTitle: string;
  orgPrice: string;
  discountedPrice: string;
  currency: string;
  image: string;
}
interface popularSectionProps {
  sectionTitle: string;
  products: productType[];
}
const PopularSection: React.FC<popularSectionProps> = ({
  sectionTitle,
  products,
}) => {
 
  const handleLoadMore = () => {
    // define me
  };
  return (
    <div className="popular-section-wrapper">
      <div className="popular-title-section">
        <h3>{sectionTitle}</h3>
        <span onClick={handleLoadMore}>See All</span>
      </div>
      <div className="card-list">
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))
        ) : (
          <>Loading . . . </>
        )}
      </div>
    </div>
  );
};

export default PopularSection;

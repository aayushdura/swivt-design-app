import React from "react";
import ProductCard from "../ReusableCards/ProductCard";
import imageOfItem from "../../Wireframes/foodItem.png";
import "./PopularSection.scss";
interface popularSectionProps {
  sectionTitle: string;
}
export interface productType {
  itemTitle: string;
  orgPrice: string;
  discountedPrice: string;
  currency: string;
  image: string;
}
const PopularSection: React.FC<popularSectionProps> = ({ sectionTitle }) => {
  const products: Array<productType> = [
    {
      image: imageOfItem,
      itemTitle: "Cheese Pizza - with extra toppines and cheese",
      orgPrice: "620",
      discountedPrice: "500",
      currency: "Rs",
    },
    {
      image: imageOfItem,
      itemTitle: "Cheese Pizza - with extra toppines and cheese",
      orgPrice: "620",
      discountedPrice: "500",
      currency: "Rs",
    },
    {
      image: imageOfItem,
      itemTitle: "Thakali Khana Set - Nepali Food",
      orgPrice: "620",
      discountedPrice: "500",
      currency: "Rs",
    },
    {
      image: imageOfItem,
      itemTitle: "Coconut Groove - Delicious Food ",
      orgPrice: "620",
      discountedPrice: "500",
      currency: "Rs",
    },
    {
      image: imageOfItem,
      itemTitle: "Chiken Momo - with slades and jhol",
      orgPrice: "620",
      discountedPrice: "500",
      currency: "Rs",
    },
  ];
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

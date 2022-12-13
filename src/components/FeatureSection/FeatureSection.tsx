import React from "react";
import FeatureCard, { featureCardProps } from "../ReusableCards/FeatureCard";
import MaskGroup from "../../LocalImages/Mask group.png";
import MaskGroup1 from "../../LocalImages/Mask group 2.png";
import MaskGroup2 from "../../LocalImages/Mask group3.png";
import MaskGroup4 from "../../LocalImages/Mask group3.png";
import "./FeatureSection.scss"
const FeatureSection:React.FC = () => {
  const featureData: Array<featureCardProps> = [
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ut quam aliquet nascetur. ",
      image: MaskGroup,
      title: "Superfast Delivery",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ut quam aliquet nascetur. ",
      image: MaskGroup1,
      title: "Best Prices & Offers",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ut quam aliquet nascetur. ",
      image: MaskGroup2,
      title: "Wide Assortment",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ut quam aliquet nascetur. ",
      image: MaskGroup4,
      title: "Easy Return/Refund",
    },
  ];
  return (
    <div className="feature-card-list">
      {featureData.map((feature,index) => (
        <FeatureCard
        key={index}
          content={feature.content}
          image={feature.image}
          title={feature.title}
        />
      ))}
    </div>
  );
};

export default FeatureSection;

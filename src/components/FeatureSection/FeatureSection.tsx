import React from "react";
import FeatureCard from "../ReusableCards/FeatureCard";

import "./FeatureSection.scss"
import { featureData } from "../../utils/staticData";
const FeatureSection:React.FC = () => {
 
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

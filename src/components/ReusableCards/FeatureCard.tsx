import React from "react";
import "./FeatureCard.scss";
export interface featureCardProps {
  image: string;
  title: string;
  content: string;
}
const FeatureCard: React.FC<featureCardProps> = ({ image, title, content }) => {
  return (
    <div className="feature-card-wrapper">
      <div className="feature-image-wrapper">
        <img src={image} alt="feature-card" />
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default FeatureCard;

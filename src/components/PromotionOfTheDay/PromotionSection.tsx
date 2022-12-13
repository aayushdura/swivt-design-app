import React from "react";
import ImageBlock from "../ReusableBlocks/ImageBlock";
import clippedImage from "../../LocalImages/Clippedpolygon.png";
import "./PromotionSection.scss";
const PromotionSection = () => {
  return (
    <div className="promotion-section-wrapper">
      <div className="promotion-1-container">
        <ImageBlock
          altTitle="promotion-1-clip"
          width={570}
          height={197}
          imageSource={clippedImage}
        />
        <div className="text-block">
          <h5>Promotion of the day!</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
            tortor sem aliquet donec quis eu dolor amet. Eget nibh enim.
          </p>
        </div>
      </div>
      <div className="promotion-2-container">
        <ImageBlock
          altTitle="promotion-2-clip"
          width={570}
          height={197}
          imageSource={clippedImage}
        />
        <div className="text-block">
          <h5>Promotion of the day!</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
            tortor sem aliquet donec quis eu dolor amet. Eget nibh enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromotionSection;

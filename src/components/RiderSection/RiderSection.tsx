import React from "react";
import ImageBlock from "../ReusableBlocks/ImageBlock";
import deliveryRider from "../../LocalImages/RiderSetion.png";
import Button from "../Button/Button";
import "./RiderSection.scss";
const RiderSection = () => {
  return (
    <div className="rider-section-wrapper">
      <ImageBlock
        altTitle="delivery-rider"
        height={493}
        width={493}
        imageSource={deliveryRider}
      />
      <div className="text-content-wrapper">
        <div className="content">
          <h3>Join Our</h3>
          <h1>Rider Program</h1>
          <p>
            Citi977’s rider crew is the backbone of Citi977 vision to change how
            people get their Grocery & Foods
            <br/><b>
              <i>Be the Citi977 Delivery Hero and earn more!</i>
            </b>
          </p>
          <Button primary>Apply</Button>
        </div>
      </div>
    </div>
  );
};

export default RiderSection;

import React, { useState } from "react";
import popularDelicacies from "../../Wireframes/poupulardelicacies.jpg";
import Button from "../Button/Button";
import CircleButton from "../Button/CircleButton";
import TextBlock from "../ReusableBlocks/TextBlock";
import "./PopularDelicacies.scss"
const PopularDelicacies = () => {
  const [quantity, setQuantity] = useState(2);
  const handleClick = (type: string) => {
    if (type === "inc") {
      setQuantity((quantity) => quantity + 1);
    } else if (type === "dec" && quantity >= 1) {
      setQuantity((quantity) => quantity - 1);
    } else {
      return;
    }
  };

  return (
    <div className="pop-delicacies-wrapper">
      <div className="image-heading-wrapper">
        <h2>Popular delicacies</h2>
        <img src={popularDelicacies} />
      </div>
      <div className="content-wrapper">
        <TextBlock
          title="Simple, tasty and very healthy vegetable and egg salad"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ut bibendum fringilla morbi at ac rhoncus nunc. Sed eu malesuada fusce velit. Nibh in quis at tincidunt iaculis. At magna mattis donec bibendum odio. Id et blandit iaculis lectus pellentesque at aliquet odio commodo. Quis cursus facilisis lobortis hendrerit augue mauris arcu rhoncus. Malesuada sed feugiat consequat, tellus posuere nam nam. Sapien, sit sapien risus, tristique egestas. Nullam feugiat dignissim odio pretium auctor. Ut at tempor, lacinia pellentesque neque lacinia. Justo nulla libero vestibulum aliquam blandit volutpat pretium posuere tristique. Risus dictum turpis bibendum cursus justo, mauris massa, dignissim."
          subtitle="Recipie"
        />
        <div className="buttons-wrapper">
          <Button primary>Read Completely</Button>
          Quantity
          <CircleButton onClick={(e) => handleClick("dec")} type="small">
            -
          </CircleButton>
          {quantity}
          <CircleButton onClick={(e) => handleClick("inc")} type="small">
            +
          </CircleButton>
        </div>
      </div>
    </div>
  );
};

export default PopularDelicacies;

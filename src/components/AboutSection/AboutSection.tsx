import React from "react";
import TextBlock from "../ReusableBlocks/TextBlock";
import aboutvideo from "../../LocalImages/aboutvideo.png";
import "./AboutSection.scss"
const AboutSection = () => {
  return (
    <div className="about-section-wrapper">
      <TextBlock
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ut bibendum fringilla morbi at ac rhoncus nunc. Sed eu malesuada fusce velit. Nibh in quis at tincidunt iaculis. At magna mattis donec bibendum odio. Id et blandit iaculis lectus pellentesque at aliquet odio commodo. Quis cursus facilisis lobortis hendrerit augue mauris arcu rhoncus. Malesuada sed feugiat consequat, tellus posuere nam nam. Sapien, sit sapien risus, tristique egestas. Nullam feugiat dignissim odio pretium auctor. Ut at tempor, lacinia pellentesque neque lacinia. Justo nulla libero vestibulum aliquam blandit volutpat pretium posuere tristique. Risus dictum turpis bibendum cursus justo, mauris massa, dignissim."
        title="About Company"
      />
      <img src={aboutvideo} />
    </div>
  );
};

export default AboutSection;

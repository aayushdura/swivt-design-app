import React from 'react'
import CircleButton from '../Button/CircleButton'
import ImageBlock from './ImageBlock'
import "./MainCarousel.scss"
import carouselImage from "../../LocalImages/carouselimage.png";
const CarouselItem = () => {
    const handleClick = () => {
        // Fix me
      };
  return (
    <div className="carousel-wrapper">
    <div className="main-carousal-wrapper">
    <div className="carousal-text-block">
      <h3>All Delicacies</h3>
      <h1>Grilled Lamb</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate morbi ultrices at pulvinar feugiat. Ultrices consequat eget magna risus, posuere dui. 
      </p>
      <CircleButton
        style={{
          padding: "15px 33px",
          borderRadius: "84.3684px",
          fontFamily: "Source Sans Pro",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "19.6206px",
          lineHeight: "113.2%",
          textAlign: "center",
          textTransform: "capitalize",
        }}
        type="small"
        onClick={handleClick}
      >
        Add To Cart
      </CircleButton>
    </div>
    <ImageBlock
      altTitle="carousal-section-image"
      height={497}
      width={497}
      imageSource={carouselImage}
    />
  </div>
  </div>
  )
}

export default CarouselItem
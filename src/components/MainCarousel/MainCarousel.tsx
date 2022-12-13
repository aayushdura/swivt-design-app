import React from "react";
import CarouselItem from "../ReusableBlocks/CarouselItem";
import Slider from "react-slick";
import "./MainCarousel.scss"
const CarouselSection = () => {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleClick = () => {
    // Fix me
  };
  return (
    <div className="main-carousel-wrapper">
      <Slider {...slickSettings}>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Slider>
    </div>
  );
};

export default CarouselSection;

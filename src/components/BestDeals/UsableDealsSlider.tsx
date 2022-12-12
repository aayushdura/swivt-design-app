import React from "react";
import ImageBlock from "../ReusableBlocks/ImageBlock";

import Slider from "react-slick";
import VoucherCard from "../ReusableCards/VoucherCard";
import { voucher } from "../../utils/staticData";
interface usableSliderProps {
  slidesToShow: number;
  title: string;
  cardWidth: number | string;
  cardHeight: number | string;
  images?: Array<string>;
  voucherInfo?: Array<voucher>;
}
const UsableDealsSlider: React.FC<usableSliderProps> = ({
  slidesToShow,
  title,
  cardWidth,
  cardHeight,
  images,
  voucherInfo,
}) => {
  const slickSettings = {
    speed: 500,
    autoplay: true,
    slidesToShow: slidesToShow,
  };
  return (
    <div className="deal-carousal-wrapper">
      {title && <h3>{title}</h3>}
      <Slider {...slickSettings}>
        {images &&
          images.length > 0 &&
          images.map((image, index) => (
            <ImageBlock
              key={index}
              imageSource={image}
              altTitle={`carousal-image-${index}`}
              height={cardHeight}
              width={cardWidth}
            />
          ))}
        {voucherInfo &&
          voucherInfo.length > 1 &&
          voucherInfo.map((voucher, index) => (
            <VoucherCard
              cardWidth={cardWidth}
              cardHeight={cardHeight}
              {...voucher}
              key={index}
            />
          ))}
      </Slider>
    </div>
  );
};

export default UsableDealsSlider;

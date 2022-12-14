import React from "react";
import ImageBlock from "../ReusableBlocks/ImageBlock";
import Slider from "react-slick";
import VoucherCard from "../ReusableCards/VoucherCard";
import { voucher } from "../../utils/staticData";
import "./UsableDealsSlider.scss";
interface usableSliderProps {
  slidesToShow?: number;
  title: string;
  cardWidth?: number | string;
  cardHeight?: number | string;
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
    slidesToShow: slidesToShow ?? 4,
    style: {
      overflow: "hidden",
    },
  };
  return (
    <div className="deal-carousal-wrapper">
      {title && <h3>{title}</h3>}
      <Slider {...slickSettings} dots={true}>
        {images &&
          images.length > 0 &&
          images.map((image, index) => (
            <div key={index} className="usable-deal-image-wrapper">
              <ImageBlock
                imageSource={image}
                altTitle={`carousal-image-${index}`}
                height={cardHeight}
                width={cardWidth}
              />
            </div>
          ))}
        {voucherInfo &&
          voucherInfo.length > 1 &&
          voucherInfo.map((voucher, index) => (
            <VoucherCard
              // cardWidth={cardWidth}
              // cardHeight={cardHeight}
              {...voucher}
              key={index}
            />
          ))}
      </Slider>
    </div>
  );
};

export default UsableDealsSlider;

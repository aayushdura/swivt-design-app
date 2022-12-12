import React from "react";
import { voucher } from "../../utils/staticData";
import Button from "../Button/Button";
import ImageBlock from "../ReusableBlocks/ImageBlock";
import "./VoucherCard.scss";
interface voucherCardProps extends voucher {
  cardHeight: number | string;
  cardWidth: number | string;
}
const VoucherCard: React.FC<voucherCardProps> = ({
  code,
  discountOffer,
  id,
  image,
  cardHeight,
  cardWidth,
}) => {
  const handleClick = () => {
    // Fix Me
    alert(`code copied : ${code}`);
  };
  return (
    <div
      className="voucher-wrapper"
      style={{
        height: cardHeight,
        width: cardWidth,
        backgroundImage: `url(${image})`,
      }}
    >
      <h3>{`${discountOffer} % OFF `}</h3>
      <span>
        <p>
          Code:
          <br />
          {code}
        </p>
        <Button
          style={{
            backgroundColor: "black",
            color: "white",
            width: "82px",
            height: "23px",
            border: "none",
            fontFamily: "Source Sans Pro",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "113.2%",
            padding: "0px",
            textTransform: "none",
          }}
          onClick={handleClick}
        >
          Copy Code
        </Button>
      </span>
    </div>
  );
};

export default VoucherCard;

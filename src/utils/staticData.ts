import carousal1 from "../Wireframes/carousal1.png";
import carousal2 from "../Wireframes/carousal2.png";
import carousal3 from "../Wireframes/carousal3.png";

import voucherbg from "../Wireframes/Voucherbg.png";
import voucherPink from "../Wireframes/VoucherPing.png";
import voucherbgdarkbrown from "../Wireframes/Voucherbgdarkbrown.png";
import voucherbgbrown from "../Wireframes/Voucherbgbrown.png";
export interface voucher {
  id: string;
  discountOffer: number;
  code: string;
  image: string;
}
export let bestDealsData = {
  slidesToShow: 3,
  title: "Best Deals",
  cardWidth: 435,
  cardHeight: 309,
  images: [carousal1, carousal2, carousal3],
};
export let couponCodeData = {
  slidesToShow: 4,
  title: "Coupon Code",
  cardWidth: 317,
  cardHeight: 133,
  voucherInfo: [
    {
      id: "voucher1",
      discountOffer: 20,
      code: "MONY20",
      image: voucherbg,
    },
    {
      id: "voucher2",
      discountOffer: 35,
      code: "MONY35",
      image: voucherbgbrown,
    },
    {
      id: "voucher3",
      discountOffer: 10,
      code: "MONY10",
      image: voucherbgdarkbrown,
    },
    {
      id: "voucher1",
      discountOffer: 50,
      code: "MONY50",
      image: voucherPink,
    },
  ] as Array<voucher>,
};

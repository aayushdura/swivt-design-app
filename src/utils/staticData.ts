import carousal1 from "../LocalImages/carousal1.png";
import carousal2 from "../LocalImages/carousal2.png";
import carousal3 from "../LocalImages/carousal3.png";

import voucherbg from "../LocalImages/Voucherbg.png";
import voucherPink from "../LocalImages/VoucherPing.png";
import voucherbgdarkbrown from "../LocalImages/Voucherbgdarkbrown.png";
import voucherbgbrown from "../LocalImages/Voucherbgbrown.png";
import imageOfItem2 from "../LocalImages/FoodItem2/Rectangle 9-1.png"
import imageOfItem3 from "../LocalImages/FoodItem2/Rectangle 9-2.png"
import imageOfItem5 from "../LocalImages/FoodItem2/Rectangle 9-3.png"
import imageOfItem1 from "../LocalImages/FoodItem2/Rectangle 9.png"
import { productType } from "../components/PopularSection/PopularSection";
import popularProd1 from "../LocalImages/foodItem.png"
import popularProd2 from "../LocalImages/FoodItem/Rectangle 9.png"
import popularProd3 from "../LocalImages/FoodItem/Rectangle 9-1.png"
import popularProd4 from "../LocalImages/FoodItem/Rectangle 9-2.png"
import popularProd5 from "../LocalImages/FoodItem/Rectangle 9-5.png"

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

export const drinkProducts = [
  {
    image: imageOfItem2,
    itemTitle: "Coca-cola",
    orgPrice: "620",
    discountedPrice: "500",
    currency: "Rs",
  },
  {
    image: imageOfItem5,
    itemTitle: "Old Durbar",
    orgPrice: "620",
    discountedPrice: "500",
    currency: "Rs",
  },
  {
    image: imageOfItem3,
    itemTitle: "Orange Guice Ice-Crushed",
    orgPrice: "620",
    discountedPrice: "500",
    currency: "Rs",
  },
  {
    image: imageOfItem5,
    itemTitle: "Red - beer Arna",
    orgPrice: "620",
    discountedPrice: "500",
    currency: "Rs",
  },
  {
    image: imageOfItem1,
    itemTitle: "Choco Milk Smoothie",
    orgPrice: "620",
    discountedPrice: "500",
    currency: "Rs",
  },
];
export const popularProducts: Array<productType> = [
  {
    image: popularProd1,
    itemTitle: "Cheese Pizza - with extra toppines and cheese",
    orgPrice: "620",
    discountedPrice: "500",
    currency: "Rs",
  },
  {
    image: popularProd5,
    itemTitle: "Cheese Pizza - with extra toppines and cheese",
    orgPrice: "620",
    discountedPrice: "500",
    currency: "Rs",
  },
  {
    image: popularProd2,
    itemTitle: "Thakali Khana Set - Nepali Food",
    orgPrice: "620",
    discountedPrice: "500",
    currency: "Rs",
  },
  {
    image: popularProd3,
    itemTitle: "Coconut Groove - Delicious Food ",
    orgPrice: "620",
    discountedPrice: "500",
    currency: "Rs",
  },
  {
    image: popularProd4,
    itemTitle: "Chiken Momo - with slades and jhol",
    orgPrice: "620",
    discountedPrice: "500",
    currency: "Rs",
  },
];
import React from "react";
import Catalogue from "./components/Catalogue/Catalogue";
import Footer from "./components/Footer/Footer";
import PopularSection from "./components/PopularSection/PopularSection";
import PopularDelicacies from "./components/PopularSection/PopularDelicacies";
import AboutSection from "./components/AboutSection/AboutSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import NavBar from "./components/Header/NavBar";
import ImageBlock from "./components/ReusableBlocks/ImageBlock";
import mainImage from "./LocalImages/main image.png";
import mainImage2 from "./LocalImages/main image2.png";
import DownloadAppSection from "./components/DownloadSection/DownloadAppSection";
import UsableDealsSlider from "./components/BestDeals/UsableDealsSlider";
import {
  bestDealsData,
  couponCodeData,
  drinkProducts,
  popularProducts,
} from "./utils/staticData";
import RiderSection from "./components/RiderSection/RiderSection";
import PromotionSection from "./components/PromotionOfTheDay/PromotionSection";
import Carousel from "./components/MainCarousel/MainCarousel";
import "./App.scss";
function App() {
  return (
    <div className="App">
      {/* Top Header NavBar */}
      <NavBar />
      <div className="main-section">
        {/* Image below header */}
        <ImageBlock
          imageSource={mainImage}
          altTitle="main-display"
          width={"100%"}
          height={268}
        />
        {/* Coupon Section */}
        <UsableDealsSlider {...couponCodeData} />
        {/* Item Catalogue */}
        <Catalogue />
        {/* Main Sliding Caraousel */}
        <Carousel />
        {/* best deals slider */}
        <UsableDealsSlider {...bestDealsData} />
        {/* popular foods card slider */}
        <PopularSection
          sectionTitle="Popular Foods"
          products={popularProducts}
        />
        {/* breakfast item card slide */}
        <PopularSection
          sectionTitle="Breakfast Items"
          products={popularProducts}
        />
        {/* drink card slider */}
        <PopularSection sectionTitle="Drink Items" products={drinkProducts}/>
        <PopularDelicacies />
        <AboutSection />
        <div className="main-image-full-width">
        <ImageBlock
          imageSource={mainImage2}
          altTitle="main-display-2"
          width={"100%"}
          height={230}
        />
        <PromotionSection />
        </div>
        {/* <FeatureSection /> */}
        {/* <RiderSection /> */}
        {/* <DownloadAppSection /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;

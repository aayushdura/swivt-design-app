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
    // height: 8332px;
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
      <main className="main-section">
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
        <PopularSection sectionTitle="Drink Items" products={drinkProducts} />

        {/* popular delicacies */}
        <PopularDelicacies />
        {/* About section  */}
        <AboutSection />
        {/* full width image  */}
        <div className="main-image-full-width">
          <ImageBlock
            imageSource={mainImage2}
            altTitle="main-display-2"
            width={"100%"}
            height={230}
          />
        </div>
        {/* promoiton of the day section  */}
        <PromotionSection />
        {/* feature tiles section  */}
        <FeatureSection />
        {/* rider section  */}
        <RiderSection />
        {/* Download App section */}
        <DownloadAppSection/>
      </main>
      <Footer />
    </div>
  );
}

export default App;

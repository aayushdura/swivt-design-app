import React from "react";
import Catalogue from "./components/Catalogue/Catalogue";
// import RiderSection from "./components/RiderSection/RiderSection";
import Footer from "./components/Footer/Footer";
import PopularSection from "./components/PopularSection/PopularSection";
import classes from "./App.module.scss";
import PopularDelicacies from "./components/PopularSection/PopularDelicacies";
import AboutSection from "./components/AboutSection/AboutSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import NavBar from "./components/Header/NavBar";
import ImageBlock from "./components/ReusableBlocks/ImageBlock";
import mainImage from "./Wireframes/main image.png";
import mainImage2 from "./Wireframes/main image2.png";
import DownloadAppSection from "./components/DownloadSection/DownloadAppSection";
import UsableDealsSlider from "./components/BestDeals/UsableDealsSlider";
import { bestDealsData, couponCodeData } from "./utils/staticData";
function App() {
  return (
    <div className={classes.App}>
      <NavBar />
      <div className="main-section">
        <ImageBlock
          imageSource={mainImage}
          altTitle="main-display"
          width={1255}
          height={268}
        />
        <UsableDealsSlider {...couponCodeData}/>
        <Catalogue />
        <UsableDealsSlider {...bestDealsData} />
        <PopularSection sectionTitle="Popular Foods" />
        <PopularSection sectionTitle="Breakfast Items" />
        <PopularSection sectionTitle="Drink Items" />
        <PopularDelicacies />
        <AboutSection />
        <ImageBlock
          imageSource={mainImage2}
          altTitle="main-display-2"
          width={1442}
          height={230}
        />
        <FeatureSection />
        <DownloadAppSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;

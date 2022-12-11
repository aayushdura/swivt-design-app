import React from "react";
import Catalogue from "./components/Catalogue/Catalogue";
// import RiderSection from "./components/RiderSection/RiderSection";
import Footer from "./components/Footer/Footer";
import PopularSection from "./components/PopularSection/PopularSection";
import classes from "./App.module.scss"
import PopularDelicacies from "./components/PopularSection/PopularDelicacies";
import AboutSection from "./components/AboutSection/AboutSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";

function App() {
  return (
    <div className={classes.App}>
      <div className="main-section">
        <Catalogue />
        <PopularSection sectionTitle="Popular Foods" />
        <PopularSection sectionTitle="Breakfast Items" />
        <PopularSection sectionTitle="Drink Items" />
        <PopularDelicacies/>
        <AboutSection/>
        <FeatureSection/>
      </div>
      <Footer />
    </div>
  );
}

export default App;

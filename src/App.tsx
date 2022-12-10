import React from "react";
import Catalogue from "./components/Catalogue/Catalogue";
// import RiderSection from "./components/RiderSection/RiderSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Catalogue/>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

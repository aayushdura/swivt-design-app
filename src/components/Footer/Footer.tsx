import React from "react";
import google from "../../LocalImages/google.png";
import appstore from "../../LocalImages/appstore.png";

import "./Style.scss";
const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-main">
        <div className="footer-categories">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h3 className="main-title">Categories</h3>
              <div className="col-md-6 col-sm-6 p-0">
                <p>Breakfast Menu</p>
                <p>Dessert</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
              </div>
              <div className="col-md-6 col-sm-6 p-0">
                <p>Dessert</p>
                <p>Dessert</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <h3 className="main-title">Useful Links</h3>
              <div className="col-md-4 col-sm-4 p-0">
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
              </div>
              <div className="col-md-4 col-sm-4 p-0">
                <p>Dessert</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                
              </div>
              <div className="col-md-4 col-sm-4 p-0">
                <p>Dessert</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden-resturants">
          <h3 className="rest-name">Resturants</h3>
          <div className="menu-items">
            <p>Fire And Ice Pizzeria</p>
            <p>Munchies</p>
            <p>Atta, Rice </p>
            <p>Fire And Ice Pizzeria</p>
            <p>Atta, Rice </p>
            <p>Munchies</p>
            <p>Atta, Rice </p>
            <p>Fire And Ice Pizzeria</p>
            <p>Munchies</p>
            <p>Atta, Rice </p>
            <p>Atta, Rice </p>
            <p>Fire And Ice Pizzeria</p>
            <p>Atta, Rice </p>
            <p>Munchies</p>
            <p>Atta, Rice </p>
            <p>Fire And Ice Pizzeria</p>
            <p>Munchies</p>
            <p>Atta, Rice </p>
            <p>Fire And Ice Pizzeria</p>
            <p>Atta, Rice </p>
            <p>Munchies</p>
            <p>Atta, Rice </p>
            <p>Fire And Ice Pizzeria</p>
            <p>Munchies</p>
            <p>Atta, Rice </p>
            <p>Atta, Rice </p>
            <p>Fire And Ice Pizzeria</p>
            <p>Atta, Rice </p>
            <p>Munchies</p>
            <p>Atta, Rice </p>
          </div>
        </div>
        <div className="payment-partner">
          <h2>Payment Partner</h2>
          <div className="payments">
            <div className="row">
              <div className="col-md-2 col-sm-4">
                <div className="white-box">
                  <div className="image">
                    <i className="bi bi-facebook"></i>
                  </div>
                  <div className="title">
                    <p className="name">eSewa</p>
                    <p className="desc">Pay using eSewa digital waller</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-4">
                <div className="white-box">
                  <div className="image">
                    <i className="bi bi-facebook"></i>
                  </div>
                  <div className="title">
                    <p className="name">khalti</p>
                    <p className="desc">Pay using khalti digital waller</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-4">
                <div className="white-box">
                  <div className="image">
                    <i className="bi bi-facebook"></i>
                  </div>
                  <div className="title">
                    <p className="name">imepay</p>
                    <p className="desc">Pay using imepay </p>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>

        <div className="hidden-download">
          <h2 className="bold-title">Download Our App</h2>
          <div className="img-wrapper">
            <img src={google} alt="google" />
            <img src={appstore} alt="app" />
          </div>
        </div>
        <div className="footer-nav">
          <div className="d-space-between">
            <div className="icons-section">
              <div className="text">© Test Private Limited 2022</div>
              <div className="term-condition text">
                Terms & conditions | Privacy policy
              </div>
            </div>
            <div className="social-icons">
              <div className="media-icon">
                <i className="bi bi-facebook"></i>
              </div>
              <div className="media-icon">
                <i className="bi bi-twitter"></i>
              </div>
              <div className="media-icon">
                <i className="bi bi-facebook"></i>
              </div>
              <div className="media-icon">
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

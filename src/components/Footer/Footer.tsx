import React from "react";

import "./Style.scss";
const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-main">
        <div className="footer-categories">
          <div className="row">
            <div className="col-md-6">
              <h3 className="main-title">Categories</h3>
              <div className="col-md-6">
                <p>Breakfast Menu</p>
                <p>Dessert</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
              </div>
              <div className="col-md-6">
                <p>Dessert</p>
                <p>Dessert</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="main-title">Useful Links</h3>
              <div className="col-md-4">
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
              </div>
              <div className="col-md-4">
                <p>Dessert</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
                <p>Breakfast Menu</p>
              </div>
              <div className="col-md-4">
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
      </div>
      <div className="payment-partner">
        <h2>Payment Partner</h2>
        <div className="payments">
          <div className="row">
            <div className="col-md-2">
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
            <div className="col-md-2">
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
            <div className="col-md-2">
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
      <div className="footer-nav">
        <div className="d-space-between">
          <div className="text">© Test Private Limited 2022</div>
          <div className="icons-section">
            <div className="term-condition text">
              Terms & conditions | Privacy policy
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

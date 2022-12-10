import React from "react";

import "./Style.scss";
const Footer: React.FC = () => {
  return (
    <main className="footer-wrapper">
      <main className="footer-main">
        <div className="footer-categories">
          <h3>Categories</h3>
          <table className="f-c-content-left">
            <tr>
              <td>Breakfast Menu</td>
              <td>Desert</td>
            </tr>
            <tr>
              <td>Soup</td>
              <td>Oven Baked Dishes</td>
            </tr>
            <tr>
              <td>Organic Salad</td>
              <td>Bottle Pickel Chilly</td>
            </tr>
            <tr>
              <td>Category Item</td>
              <td>Category Item</td>
            </tr>
            <tr>
              <td>Category Item</td>
              <td>Category Item</td>
            </tr>
            <tr>
              <td>Category Item</td>
              <td>Category Item</td>
            </tr>
            <tr>
              <td>Category Item</td>
              <td>Category Item</td>
            </tr>
            <tr>
              <td>Category Item</td>
              <td>Category Item</td>
            </tr>
            <tr>
              <td>Category Item</td>
              <td>Category Item</td>
            </tr>
            <tr>
              <td>Category Item</td>
              <td>Category Item</td>
            </tr>
          </table>
        </div>
        <div className="footer-usefull-links">
          <h3>Useful Links</h3>
          <table className="f-c-content-right">
            <tr>
              <td>Link</td>
              <td>Link</td>
              <td>Link</td>
            </tr>
            <tr>
              <td>Link</td>
              <td>Link</td>
              <td>Link</td>
            </tr>
            <tr>
              <td>Link</td>
              <td>Link</td>
              <td>Link</td>
            </tr>
            <tr>
              <td>Link</td>
              <td>Link</td>
              <td>Link</td>
            </tr>
            <tr>
              <td>Link</td>
              <td>Link</td>
              <td>Link</td>
            </tr>
            <tr>
              <td>Link</td>
              <td>Link</td>
              <td>Link</td>
            </tr>
            <tr>
              <td>Link</td>
              <td>Link</td>
              <td>Link</td>
            </tr>
          </table>
        </div>
      </main>
      <div className="footer-payment-partner">
        <h3>Payment Partner</h3>
        <table className="f-payment">
          <tr>
            <td>
              <img alt="E sewa" />
            </td>
            <td>
              <img alt="Khalti" />
            </td>
            <td>
              <img alt="Ime Pay" />
            </td>
          </tr>
        </table>
      </div>
      <div className="footer-nav">
        <span>© Test Private Limited 2022</span>
        <span className="term-condition">
          Terms & conditions | Privacy policy
        </span>
        <span className="social-icons">
     
        </span>
      </div>
    </main>
  );
};

export default Footer;

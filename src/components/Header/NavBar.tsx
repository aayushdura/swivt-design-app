import {
  Badge,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import logoElipse from "../../LocalImages/Ellipse 181.png";
import SearchIcon from "@mui/icons-material/Search";
import "./NavBar.scss";
import { ShoppingCartCheckout } from "@mui/icons-material";

const NavBar = () => {
  const [searchKey, setSearchKey] = useState("");
  let deatailsForNavBar = {
    phoneNo: "+977 9800000000",
    address: "Kathmandu, Nepal",
  }; //data fetched from backend
  let numberOfItemInCart = 22;

  const handleSearchKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    // we can use debounce for search key
    setSearchKey(e.currentTarget.value);
  };
  return (
    <nav className="navbar-wrapper">
      <div className="link-bar-wrapper">
        <span className="link-bar-title1">24 hrs Service | 365 Days</span>
        <span className="link-bar-title2">
          {" "}
          Translate | Support | Help | FAQ {/* Fix me and add routes */}
        </span>
      </div>
      <div className="main-navbar-wrapper">
        <div className="logo-wrapper">
          <img src={logoElipse} alt="logo" />
        </div>
        <div className="address-phone-wrapper">
          <span className="phone-wrapper">{deatailsForNavBar.phoneNo}</span>
          <span className="address-wrapper">{deatailsForNavBar.address}</span>
        </div>
        <div className="search-bar-wrapper">
          <OutlinedInput
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon fontSize="large" style={{ color: " #926228" }} />
              </InputAdornment>
            }
            placeholder="Search your food"
            onChange={handleSearchKey}
            value={searchKey}
            style={{ borderRadius: "48px",width:"100%" }}
          />
        </div>
        <span className="login-link">Login</span>
        <div className="cart-icon-wrapper">
          <IconButton>
            <Badge badgeContent={numberOfItemInCart}>
              <ShoppingCartCheckout
                fontSize="large"
                style={{ color: " #926228" }}
              />
            </Badge>
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

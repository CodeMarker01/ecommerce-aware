import React from "react";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search.svg";
import cartIcon from "../assets/cart.svg";
import arrowIcon from "../assets/arrow.svg";

const Nav = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__intro">
          <div className="header__search">
            <input
              type="text"
              name="searchInput "
              id="searchUnput"
              className="header__searchInput"
              placeholder="Search"
            />
          </div>
          <img src={logo} alt="logo" className="header__logo" />
          <div className="header__user">
            <p className="header__register">Register</p>
            <div className="header__login">Login</div>
          </div>
          <div className="header__basket">
            <img src={cartIcon} alt="card icon" />
            <div className="header__basketCount"></div>
          </div>
        </div>
        <div className="line"></div>
        <div className="header__categories">
          <div className="header__gender">
            <div className="header__option">
              <p>Men</p>
              <img src={arrowIcon} alt="arrow icon" />
            </div>
            <div className="header__option">
              <p>Ladies</p>
              <img src={arrowIcon} alt="arrow icon" />
            </div>
            <div className="header__option">
              <p>Boys</p>
              <img src={arrowIcon} alt="arrow icon" />
            </div>
            <div className="header__option">
              <p>Girls</p>
              <img src={arrowIcon} alt="arrow icon" />
            </div>
          </div>
          <ul className="header__dropdown">
            <li>
              <a href="#">Tops</a>
            </li>
            <li>
              <a href="#">Bottoms</a>
            </li>
            <li>
              <a href="#">Dresses</a>
            </li>
            <li>
              <a href="#">Jackets</a>
            </li>
            <li>
              <a href="#">Shoes</a>
            </li>
            <li>
              <a href="#">Accesories</a>
            </li>
            <li>
              <a href="#">Sales</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

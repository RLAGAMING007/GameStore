import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const MainNav = () => (
  <>
    <div className="global-nav">
      <div className="sub-nav">
        <div className="sub-nav__search">
          <button className="search-icon__btn">
            <SearchIcon
              style={{
                height: "16px",
                width: "18px",
                color: "rgb(158, 158, 158)",
              }}
            />
          </button>

          <div className="search-input">
            <input type="text" placeholder="Search store" />
          </div>
        </div>
        <div className="sub-nav__list0">
          <ul className="sub-nav__list-items">
            <li>
              <Link className="sub-nav__list-item" to="/discover">
                Discover
              </Link>
            </li>
            <li>
              <Link className="sub-nav__list-item" to="/browse">
                Browse
              </Link>
            </li>
            <li>
              <Link className="sub-nav__list-item" to="/news">
                News
              </Link>
            </li>
          </ul>
        </div>
        <div className="sub-nav__list1">
          <ul className="sub-nav__list-items">
            <li>
              <Link className="sub-nav__list-item" to="/wishlist">
                Wishlist
              </Link>
            </li>
            <li>
              <Link className="sub-nav__list-item" to="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default MainNav;

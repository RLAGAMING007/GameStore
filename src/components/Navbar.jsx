import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Height } from "@mui/icons-material";
const MainNav = () => (
  <>
    <div className="global-nav">
      <div className="sub-nav">
        <div className="sub-nav__search">
          <SearchIcon style={{ height: "18px", color: "rgb(158, 158, 158)" }} />
          <input type="text" placeholder="Search Store" />
        </div>
        <div className="sub-nav__list0">
          <ul className="sub-nav__list-items">
            <li>
              <a className="sub-nav__list-item" href="/discover">
                Discover
              </a>
            </li>
            <li>
              <a className="sub-nav__list-item" href="/browse">
                Browse
              </a>
            </li>
            <li>
              <a className="sub-nav__list-item" href="/news">
                News
              </a>
            </li>
          </ul>
        </div>
        <div className="sub-nav__list0">
          <ul className="sub-nav__list-items">
            <li>
              <a className="sub-nav__list-item" href="/wishlist">
                Wishlist
              </a>
            </li>
            <li>
              <a className="sub-nav__list-item" href="/kart">
                Kart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default MainNav;

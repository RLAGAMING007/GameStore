import React, { Children } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PublicIcon from "@mui/icons-material/Public";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { Height } from "@mui/icons-material";
const Header = () => {
  return (
    <>
      <header className="global-header">
        <div className="container">
          <div className="global-header__menu  hide-in-drawer">
            <div className="dropdown-menu">
              <button className="dropdown-menu__btn">
                <img src="assets/logo.png" alt="" />
                <span className="expand-icon">{<ExpandMoreIcon />}</span>
              </button>
            </div>

            <nav className="global-header__nav">
              <div className="store-logo">
                <img className="store-txt" src="assets/store-txt.png" alt="" />
              </div>
              <div className="main-nav">
                <ul className="main-nav__list">
                  <CustomLink
                    className="main-nav__list-item"
                    to="/distribution"
                  >
                    Distribution
                  </CustomLink>
                  <CustomLink className="main-nav__list-item" to="/support">
                    Support
                  </CustomLink>
                  <CustomLink
                    className="main-nav__list-item"
                    to="/unreal-engine"
                  >
                    Unreal Engine
                  </CustomLink>
                </ul>
              </div>
            </nav>
          </div>

          <div className="tools">
            <button className="language-btn">
              <PublicIcon style={{ height: "50px" }} />
            </button>

            <button className="profile">
              <img src="assets/person-w.png" alt="profile" />
            </button>
            <button className="download-btn">Download</button>
          </div>
        </div>
      </header>
    </>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActivePath = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <>
      <li {...props}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    </>
  );
};
export default Header;

import React, { Children, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PublicIcon from "@mui/icons-material/Public";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { Height } from "@mui/icons-material";
const Header = () => {
  const [toggleMenu, useToggleMenu] = useState(false);

  const HandleToggleMenu = () => {
    useToggleMenu(!toggleMenu);
  };

  return (
    <>
      <header className="global-header">
        <div className="container">
          <div className="global-header__menu  hide-in-drawer">
            <div className="dropdown-menu">
              <button onClick={HandleToggleMenu} className="dropdown-menu__btn">
                <img src="assets/logo.png" alt="" />
                <span
                  className={toggleMenu ? "expand-icon" : "expand-icon  expand"}
                >
                  <ExpandMoreIcon
                    style={{
                      color: toggleMenu ? "white" : "",
                      transform: toggleMenu ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </span>
              </button>
            </div>
            <hr />
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
              <ManageAccountsOutlinedIcon />
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
      <li>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    </>
  );
};
export default Header;

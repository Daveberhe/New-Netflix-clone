import React, { useState, useEffect } from "react";
import "./header.css";
import netflixLogo from "../../Assets/Images/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  return (
    // <div className="header_outer_container nav_black">
    <div className={`header_outer_container ${show && "nav_black"}`}>
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={netflixLogo} alt="Netflix Logo" width="100"></img>
            </li>
            <li>Home</li>
            <li>TVshows</li>
            <li>Movies</li>
            <li className="header_links ">Latest</li>
            <li className="header_links">Mylist</li>
            <li className="header_links">Browse by language</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

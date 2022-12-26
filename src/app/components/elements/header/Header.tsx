import React from "react";

import './Header.scss'
import logo from "../../../../public/images/logo.svg";

const Header = ():React.ReactElement => {
  return (
    <div className="header">
      <div className="header-logo">
        <img className="logo" alt="" src={logo} />
        <p className="header-nameCompany">TheBox</p>
      </div>
      <div className="header-navbar">
        <ul className="navbar-list">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">About Us</li>
          <li className="navbar-item">Projects</li>
          <li className="navbar-item">Services</li>
          <li className="navbar-item highlight">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

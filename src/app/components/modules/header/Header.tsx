import React from "react";

import "app/components/modules/header/Header.scss";
import Logo from 'app/components/elements/common/logo/Logo';


const Header:React.FC = (): React.ReactElement => {
  return (
    <div className="header">
      <Logo />
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

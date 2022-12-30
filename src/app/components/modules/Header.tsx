import React from "react";
import Logo from "app/components/elements/Logo";

import { MenuOutlined } from "@ant-design/icons";

const navbar: string[] = [
  "Home",
  "About Us",
  "Projects",
  "Services",
  "Contact",
];

const Header: React.FC = (): React.ReactElement => {

  const [isOpenNavbarMobile, setIsOpenNavbarMobile] = React.useState<boolean>()

  const HandleOpenNav = ():void => {
    setIsOpenNavbarMobile(!isOpenNavbarMobile)
  }
  const handleChoosePage = ():void => {
    setIsOpenNavbarMobile(false)
  }
  return (
    <div className="header">
      <Logo />
      <div className="header-navbar">
        <ul className="navbar-list">
          {navbar.map((nav, index) => {
            return (
              <li key={index} className="navbar-item">
                {nav}
              </li>
            );
          })}
        </ul>
      </div>
      {/* nav mobile */}
      <div className="header-navbar-mobile">
        <div className="header-mobile-menu">
          <MenuOutlined onClick={HandleOpenNav} />
          <ul className="nav-list-mobile">
            {isOpenNavbarMobile && navbar.map((nav, index) => {
              return (
                <li key={index} className="nav-item-mobile" onClick={handleChoosePage} >
                 
                  <a href="#" >{nav}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;

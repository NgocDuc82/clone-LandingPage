import React from "react";
import Info from "./info/Info";
import "./Footer.scss";
import Contact from './contact/Contact';
import CopyRight from './copyRight/CopyRight';
export default function Footer(): React.ReactElement {
  return (
    <div className="footer">
      <div className="footer-top">
        <Info />
        <Contact />
      </div>
      <div className="footer-bottom">
         <CopyRight />
      </div>
    </div>
  );
}

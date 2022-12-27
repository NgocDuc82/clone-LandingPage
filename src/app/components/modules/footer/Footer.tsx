import React from "react";
import Info from "app/components/modules/footer/info/Info";
import "app/components/modules/footer/Footer.scss";
import Contact from "app/components/modules/footer/contact/Contact";
import CopyRight from "app/components/modules/footer/copyRight/CopyRight";
const Footer: React.FC = (): React.ReactElement => {
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
};
export default Footer
import React from "react";

import aboutImg from "public/images/aboutImg.svg";
import "./About.scss";

const About = (): React.ReactElement => {
  return (
    <div className="about">
      <img src={aboutImg} alt="" className="about-img" />
      <div className="about-desc">
        <div className="about-desc-title">About us</div>
        <div className="about-desc-content">
          For more than 30 years we have been delivering world-class
          construction and we’ve built many lasting relationships along the way.
          <br />
          <br />
          We’ve matured into an industry leader and trusted resource for those
          seeking quality, innovation and reliability when building in the U.S.
        </div>
        <button>More on Our History</button>
      </div>
    </div>
  );
};
export default About;

import React from "react";

import "app/styles/modules/Ads.scss";

import bgAds from "public/images/bg-ads.svg";

const Ads: React.FC = (): React.ReactElement => {
  return (
    <div className="ads">
      <img alt="" src={bgAds} />
      <div className="ads-content">
        <div className="title">
          <h1>Free consultation with exceptional quality</h1>
          <span>Just one call away: +84 1102 2703</span>
        </div>
        <button className="btn">Get your consultation</button>
      </div>
    </div>
  );
};

export default Ads;

import React from "react";
import "app/styles/modules/Stats.scss";

import stats1 from "public/images/stats-1.svg";
import stats2 from "public/images/stats-2.svg";
import stats3 from "public/images/stats-3.svg";
import stats4 from "public/images/stats-4.svg";

const Stats: React.FC = (): React.ReactElement => {
  const DataStats: React.FC = (): React.ReactElement => {
    return (
      <div className="data-stats">
        <div className="stats-list">
          <div className="stats-item item-1">
            <div className="item-number">84</div>
            <div className="item-icon">
              <img alt="icon" src={stats1} />
            </div>
            <div className="item-content">Happy Clients</div>
          </div>
          <div className="stats-item item-2">
            <div className="item-number">123</div>
            <div className="item-icon">
              <img alt="icon" src={stats3} />
            </div>
            <div className="item-content">Projects Completed</div>
          </div>
          <div className="stats-item item-3">
            <div className="item-number">37</div>
            <div className="item-icon">
              <img alt="icon" src={stats2} />
            </div>
            <div className="item-content">Awards Win</div>
          </div>
          <div className="stats-item item-4">
            <div className="item-number">30</div>
            <div className="item-icon">
              <img alt="icon" src={stats4} />
            </div>
            <div className="item-content">Years in Business</div>
          </div>
        </div>
      </div>
    );
  };
  const DescStats: React.FC = (): React.ReactElement => {
    return (
      <div className="descStats">
        <div className="desc-title">30 Years Experience</div>
        <div className="desc-content">
          Our company has been the leading provided construction services to
          clients throughout the USA since 1988.
        </div>
        <button className="desc-btn">Contact Us</button>
      </div>
    );
  };

  return (
    <div className="Stats">
      <DataStats />
      <DescStats />
    </div>
  );
};

export default Stats;

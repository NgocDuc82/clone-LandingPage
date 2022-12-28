import React from "react";
import stats1 from "public/images/stats-1.svg";
import 'app/components/modules/stats/dataStats/DataStats.scss'
const DataStats: React.FC = (): React.ReactElement => {
  return (
    <div className="data-stats">
      <div className="stats-list">
        <div className="stats-item">
          <div className="item-number">84</div>
          <div className="item-icon">
            <img alt="icon" src={stats1} />
          </div>
          <div className="item-content">Happy Clients</div>
        </div>
      </div>
    </div>
  );
};

export default DataStats;

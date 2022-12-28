import React from "react";
import DescStats from "app/components/modules/stats/descStats/DescStats";
import DataStats from "app/components/modules/stats/dataStats/DataStats";

import 'app/styles/modules/Stats.scss'

const Stats: React.FC = (): React.ReactElement => {
  return (
    <div className="Stats">
      <DataStats />
      <DescStats />
    </div>
  );
};

export default Stats;

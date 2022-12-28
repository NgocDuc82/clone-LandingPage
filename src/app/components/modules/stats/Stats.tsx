import React from "react";
import DescStats from "./descStats/DescStats";
import DataStats from "./dataStats/DataStats";

import 'app/components/modules/stats/Stats.scss'

const Stats: React.FC = (): React.ReactElement => {
  return (
    <div className="Stats">
      <DataStats />
      <DescStats />
    </div>
  );
};

export default Stats;

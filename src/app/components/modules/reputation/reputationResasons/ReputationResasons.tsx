import React from "react";

import { ReputationType } from 'app/components/modules/reputation/ReputationType';

const ReputationResasons:React.FC<ReputationType> = (data):React.ReactElement => {
  return (
    <div className="reputation-reasons">
      <div className="reputation-reasons-icon">
        <img alt="" src={data.img} />
      </div>
      <div className="reputation-reasons-title">
        <h4>{data.title}</h4>
      </div>
      <div className="reputation-reasons-desc">
        <p>{data.decs}</p>
      </div>
    </div>
  );
};

export default ReputationResasons;

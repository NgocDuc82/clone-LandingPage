import React from "react";

import './ReputationResasons.scss';
import { ReputationType } from 'app/types/ReputationType';

const ReputationResasons:React.FC<ReputationType> = (data):React.ReactElement => {
  return (
    <div className="reputation-reasons">
      <div className="reputation-reasons-icon">
        <img alt="" src={data.img} />
      </div>
      <div className="reputation-reasons-title">
        <h4>{data.titles}</h4>
      </div>
      <div className="reputation-reasons-desc">
        <p>{data.decs}</p>
      </div>
    </div>
  );
};

export default ReputationResasons;

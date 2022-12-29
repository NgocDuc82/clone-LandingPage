import React from "react";

import "app/styles/modules/reputation.scss";
import { reputations } from "app/const/mock";

export type ReputationType = {
  img: string;
  title: string;
  decs: string;
};

type ReputationTypeProps = {
  reputations: ReputationType[];
};

const Reputation: React.FC<ReputationTypeProps> = ({
  reputations,
}): React.ReactElement => {
  const ReputationResasons = ({ img, title, decs }: ReputationType) => {
    return (
      <div className="reputation-reasons">
        <div className="reputation-reasons-icon">
          <img alt="" src={img} />
        </div>
        <div className="reputation-reasons-title">
          <h4>{title}</h4>
        </div>
        <div className="reputation-reasons-desc">
          <p>{decs}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="reputation">
      <div className="reputation-title">
        <h2>Our Reputation</h2>
      </div>
      <div className="reasons-wrapper">
        {reputations?.map((data, index): React.ReactElement => {
          return <ReputationResasons key={index} {...data} />;
        })}
      </div>
    </div>
  );
};

export default Reputation;

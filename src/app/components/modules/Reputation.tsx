import React from "react";

import "app/styles/modules/Reputation.scss";
import ReputationIcon from "public/images/ReputationIcon.svg";

export type ReputationType = {
  img: string;
  title: string;
  decs: string;
};

const Reputation = (): React.ReactElement => {
  const ReputationResasons: React.FC<ReputationType> = (
    data
  ): React.ReactElement => {
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

  const mockReputations: ReputationType[] = [
    {
      img: ReputationIcon,
      title: "Best Services",
      decs: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
    },
    {
      img: ReputationIcon,
      title: "Best Teams",
      decs: "Cursus semper tellus volutpat aliquet lacus.",
    },
    {
      img: ReputationIcon,
      title: "Best Designs",
      decs: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
    },
  ];
  return (
    <div className="reputation">
      <div className="reputation-title">
        <h2>Our Reputation</h2>
      </div>
      <div className="reasons-wrapper">
        {mockReputations?.map((data, index): React.ReactElement => {
          return <ReputationResasons key={index} {...data} />;
        })}
      </div>
    </div>
  );
};

export default Reputation;

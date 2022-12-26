import React from "react";

import "./Reputation.scss";
import { ReputationType } from "../../../types/ReputationType";
import ReputationResasons from "./reputationResasons/ReputationResasons";
import ReputationIcon from "../../../../public/images/ReputationIcon.svg";

const  Reputation = (): React.ReactElement =>  {
  const mockReputations: ReputationType[] = [
    {
      img: ReputationIcon,
      titles: "Best Services",
      decs: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
    },
    {
      img: ReputationIcon,
      titles: "Best Teams",
      decs: "Cursus semper tellus volutpat aliquet lacus.",
    },
    {
      img: ReputationIcon,
      titles: "Best Designs",
      decs: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
    },
  ];
  return (
    <div className="reputation">
      <div className="reputation-title">
        <h2>Our Reputation</h2>
      </div>
      <div className="reasons-wrapper">
        {mockReputations?.map((data): React.ReactElement => {
          return <ReputationResasons {...data} />;
        })}
      </div>
    </div>
  );
}

export default Reputation

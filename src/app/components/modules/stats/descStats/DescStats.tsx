import React from "react";


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

export default DescStats;

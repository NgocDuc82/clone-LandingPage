import React from "react";
import Logo from "app/components/elements/Logo";

const Info: React.FC = (): React.ReactElement => {
  return (
    <div className="info">
      <div className=" info-item address">
        <p>ADDRESS:</p>
        <span>6391 Elgin St. Celina, Delaware 10299</span>
      </div>
      <div className=" info-item phone">
        <p>PHONE:</p> <span>+84 1102 2703</span>
      </div>
      <div className=" info-item mail">
        <p>EMAIL:</p> <span>hello@thebox.com</span>
      </div>
      <Logo />
    </div>
  );
};

export default Info;

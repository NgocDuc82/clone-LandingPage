import React from "react";
import Logo from "../../../elements/common/logo/Logo";

import './Info.scss';

export default function Info(): React.ReactElement {
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
}

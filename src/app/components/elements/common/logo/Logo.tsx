import React from "react";
import logo from "public/images/logo.svg";

import 'app/components/elements/common/logo/Logo.scss'

export default function Logo() {
  return (
    <div className="logo">
      <img className="logo" alt="" src={logo} />
      <p className="nameCompany">TheBox</p>
    </div>
  );
}

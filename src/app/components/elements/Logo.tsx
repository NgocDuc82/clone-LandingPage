import React from "react";
import logo from "public/images/logo.svg";

import 'app/styles/elements/logo.scss'

const Logo:React.FC = ():React.ReactElement => {
  return (
    <div className="logo-wrap">
      <img className="logo" alt="" src={logo} />
      <p className="nameCompany">TheBox</p>
    </div>
  );
}
export default Logo
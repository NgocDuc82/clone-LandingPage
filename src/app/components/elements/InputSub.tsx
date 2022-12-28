import React from "react";

import 'app/styles/elements/inputSub.scss'

const  InputSub:React.FC = ():React.ReactElement =>  {
  return (
    <div className="inputSub">
      <input className="input-mail" placeholder="Your email here" />
      <button className="btn-sub">Subcrible</button>
    </div>
  );
}
export default InputSub

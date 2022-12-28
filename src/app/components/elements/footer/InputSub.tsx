import React from "react";

import 'app/components/elements/footer/inputSub.scss'

export default function InputSub():React.ReactElement {
  return (
    <div className="inputSub">
      <input className="input-mail" placeholder="Your email here" />
      <button className="btn-sub">Subcrible</button>
    </div>
  );
}

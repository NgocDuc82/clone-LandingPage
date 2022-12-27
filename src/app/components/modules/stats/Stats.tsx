import React from "react";
import StatImg from "./statImg/StatImg";
import StatText from './statText/StatText';

export default function Stats(): React.ReactElement {
  return (
    <div className="stats">
      <StatImg />
      <StatText />
    </div>
  );
}

import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
const ButtonNext: React.FC = (): React.ReactElement => {
  return (
    <button className="buttonNext">
      Next
      <ArrowRightOutlined />
    </button>
  );
};
export default ButtonNext

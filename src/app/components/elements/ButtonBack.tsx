import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
const ButtonBack: React.FC = (): React.ReactElement => {
  return (
    <button className="buttonBack">
      <ArrowLeftOutlined />
      Back
    </button>
  );
}
export default ButtonBack

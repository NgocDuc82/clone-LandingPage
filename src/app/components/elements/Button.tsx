import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { ArrowRightOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";

interface ButtonType {
  title: string;
}

interface ButtonProps {
  item: ButtonType;
}

const Button: React.FC<ButtonProps> = ({ item }): React.ReactElement => {
  // const navigate = useNavigate()
  const HandleButton = () => {
    // navigate('/')
  };

  return (
    <button onClick={HandleButton}>
      {item.title === "Back" && <ArrowLeftOutlined />}
      {item.title}
      {item.title === "Next" && <ArrowRightOutlined />}
    </button>
  );
};
export default Button;

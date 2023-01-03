import React from "react";

interface InputType {
    placeholder : string;
}

interface InputProps {
  item: InputType;
}

const Input: React.FC<InputProps> = ({ item }): React.ReactElement => {
  return (
   <input placeholder={item.placeholder} />
  );
};
export default Input;

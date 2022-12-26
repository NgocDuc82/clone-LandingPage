import React from "react";
import { ServicesType } from "../../../../types/Services";

const ListService:React.FC<ServicesType> = (data):React.ReactElement => {
  return (
    <li className="service-item">
      <div className="service-item-icon">
        <img alt="" src={data.icon} />
      </div>
      <div className="service-item-name">{data.name}</div>
    </li>
  );
};
export default ListService;

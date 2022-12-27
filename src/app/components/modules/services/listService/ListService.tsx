import React from "react";
import { ServicesType } from "app/types/Services";

const ListService:React.FC<ServicesType> = (data):React.ReactElement => {
  
  return (
    <li className={data.id % 2 === 0 ? "service-item highlight" : "service-item"} >
      <div className="service-item-icon">
        <img alt="" src={data.icon} />
      </div>
      <div className="service-item-name">{data.name}</div>
    </li>
  );
};
export default ListService;

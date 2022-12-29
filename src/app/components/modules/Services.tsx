import React from "react";

import "app/styles/modules/service.scss";
import { services } from "app/const/mock";

export type ServicesType = {
  id: number;
  icon: string;
  name: string;
};

type ServicesTypeProps = {
  services: ServicesType[];
};

const Services: React.FC<ServicesTypeProps> = ({
  services,
}): React.ReactElement => {
  const ListService = ({ id, icon, name }: ServicesType) => {
    return (
      <li className={id % 2 === 0 ? "service-item highlight" : "service-item"}>
        <div className="service-item-icon">
          <img alt="" src={icon} />
        </div>
        <div className="service-item-name">{name}</div>
      </li>
    );
  };

  return (
    <div className="service-wrap">
      <div className="service-title">Services</div>
      <div className="services-content">
        <ul className="service-list">
          {services?.map((services) => {
            return <ListService key={services.id} {...services} />;
          })}
        </ul>
      </div>
    </div>
  );
};
export default Services;

import React from "react";

import "./Service.scss";

import architecture from "public/images/Service-item-architecture.svg";
import construction from "public/images/Service-item-construction.svg";
import consultation from "public/images/Service-item-consultation.svg";
import electric from "public/images/Service-item-electric.svg";
import renovation from "public/images/Service-item-renovation.svg";
import repairServices from "public/images/Service-item-repairServices.svg";
import ListService from 'app/components/modules/services/listService/ListService';
import { ServicesType } from 'app/components/modules/services/ServicesType';




const Services = (): React.ReactElement => {
  const services: ServicesType[] = [
    {
      id: 1,
      icon: construction,
      name: "Construction",
    },
    {
      id: 2,
      icon: renovation,
      name: "Renovation",
    },
    {
      id: 3,
      icon: consultation,
      name: "Consultation",
    },
    {
      id: 4,
      icon: repairServices,
      name: "Repair Services",
    },
    {
      id: 5,
      icon: architecture,
      name: "Architecture",
    },
    {
      id: 6,
      icon: electric,
      name: "Electric",
    },
  ];
  return (
    <div className="service-wrap">
      <div className="service-title">Services</div>
      <div className="services-content">
        <ul className="service-list">
            {
                services?.map((data) => {
                    return  <ListService key={data.id} {...data}   />;
                })
            }
        </ul>
      </div>
    </div>
  );
};
export default Services;

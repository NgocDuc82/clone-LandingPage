import React from "react";

import "./Service.scss";
import { ServicesType } from "app/types/Services";

import architecture from "public/images/Service-item-architecture.svg";
import construction from "public/images/Service-item-construction.svg";
import consultation from "public/images/Service-item-consultation.svg";
import electric from "public/images/Service-item-electric.svg";
import renovation from "public/images/Service-item-renovation.svg";
import repairServices from "public/images/Service-item-repairServices.svg";
import ListService from './listService/ListService';




const Services = (): React.ReactElement => {
  const services: ServicesType[] = [
    {
      icon: construction,
      name: "Construction",
    },
    {
      icon: renovation,
      name: "Renovation",
    },
    {
      icon: consultation,
      name: "Consultation",
    },
    {
      icon: repairServices,
      name: "Repair Services",
    },
    {
      icon: architecture,
      name: "Architecture",
    },
    {
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
                    return  <ListService {...data} />
                })
            }
        </ul>
      </div>
    </div>
  );
};
export default Services;

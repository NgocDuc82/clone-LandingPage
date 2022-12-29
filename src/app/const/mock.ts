import project1 from "public/images/project1.svg";
import project2 from "public/images/project2.svg";
import project3 from "public/images/project3.svg";
import project4 from "public/images/project4.svg";


import architecture from "public/images/Service-item-architecture.svg";
import construction from "public/images/Service-item-construction.svg";
import consultation from "public/images/Service-item-consultation.svg";
import electric from "public/images/Service-item-electric.svg";
import renovation from "public/images/Service-item-renovation.svg";
import repairServices from "public/images/Service-item-repairServices.svg";
import ReputationIcon from "public/images/ReputationIcon.svg";


export const projects = [
  {
    img: project1,
    name: "Wildstone Infra Hotel",
    address: "2715 Ash Dr. San Jose, South Dakota",
  },
  {
    img: project2,
    name: "Wish Stone Building",
    address: "2972 Westheimer Rd. Santa Ana, Illinois ",
  },
  {
    img: project3,
    name: "Mr. Parkinston’s House",
    address: "3517 W. Gray St. Utica, Pennsylvania",
  },
  {
    img: project4,
    name: "Oregano Height",
    address: "2464 Royal Ln. Mesa, New Jersey ",
  },
];


export const services = [
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

export const reputations = [
  {
    img: ReputationIcon,
    title: "Best Services",
    decs: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
  },
  {
    img: ReputationIcon,
    title: "Best Teams",
    decs: "Cursus semper tellus volutpat aliquet lacus.",
  },
  {
    img: ReputationIcon,
    title: "Best Designs",
    decs: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
  },
];

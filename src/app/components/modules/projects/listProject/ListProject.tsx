import React from "react";

import project1 from "public/images/project1.svg";
import project2 from "public/images/project2.svg";
import project3 from "public/images/project3.svg";
import project4 from "public/images/project4.svg";
import DetailProject from "app/components/elements/DetailProject";

import ButtonBack from "app/components/elements/ButtonBack";
import ButtonNext from "app/components/elements/ButtonNext";

import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";

export type ProjectType = {
  img: string;
  name: string;
  address: string;
};

const ListProject: React.FC = (): React.ReactElement => {
  const [valueRadio, setValueRadio] = React.useState(1);

  const onChangeRadio = (e: RadioChangeEvent) => {
    setValueRadio(e.target.value);
  };
  const mockProject: ProjectType[] = [
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
  return (
    <div className="ListProject">
      <div className="ListProject-show">
        {mockProject?.map((project) => {
          return <DetailProject {...project} />;
        })}
      </div>
      <div className="ListProject-page">
        <ButtonBack />
        <Radio.Group
          className="ListProject-radio"
          onChange={onChangeRadio}
          value={valueRadio}
        >
          <Radio className="radio-item" value={1}></Radio>
          <Radio className="radio-item" value={2}></Radio>
          <Radio className="radio-item" value={3}></Radio>
          <Radio className="radio-item" value={4}></Radio>
          <Radio className="radio-item" value={5}></Radio>
        </Radio.Group>
        <ButtonNext />
      </div>
    </div>
  );
};
export default ListProject;

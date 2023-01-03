import React from "react";
import "app/styles/modules/projects.scss";

import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import Button from "app/components/elements/Button";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { ArrowRightOutlined } from "@ant-design/icons";

export type DetailProjectType = {
  img: string;
  name: string;
  address: string;
};

type ProjectProps = {
  projects: DetailProjectType[];
};

const Projects: React.FC<ProjectProps> = ({ projects }): React.ReactElement => {
  const [valueRadio, setValueRadio] = React.useState(1);

  const onChangeRadio = (e: RadioChangeEvent) => {
    setValueRadio(e.target.value);
  };

  const HandleBack = (): void => {
    if (valueRadio === 1) {
      setValueRadio(5);
    } else {
      setValueRadio(valueRadio - 1);
    }
  };
  const HandleNext = (): void => {
    if (valueRadio === 5) {
      setValueRadio(1);
    } else {
      setValueRadio(valueRadio + 1);
    }
  };

  return (
    <div className="project">
      <div className="projectNavbar">
        <div className="projectNavbar-title">Projects</div>
        <ul className="menu-list">
          <li className="menu-item  first-item ">All</li>
          <li className="menu-item">Commercail</li>
          <li className="menu-item">Residential</li>
          <li className="menu-item">Other</li>
        </ul>
      </div>
      <div className="ListProject">
        <div className="ListProject-show">
          {projects?.map((projects, index) => {
            return (
              <div className="detail" key={index}>
                <div className="img">
                  <img alt="" src={projects.img} />
                </div>
                <div className="detail-info">
                  <div className="detail-name">{projects.name}</div>
                  <div className="detail-address">{projects.address}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="ListProject-page">
          <Button onClick={HandleBack}>
            <ArrowLeftOutlined />
            Back
          </Button>
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
          <Button onClick={HandleNext}>
            Next
            <ArrowRightOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Projects;

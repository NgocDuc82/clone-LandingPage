import React from "react";
import { ProjectType } from "app/components/modules/projects/listProject/ListProject";

import "app/styles/elements/DetailProject.scss";

const DetailProject: React.FC<ProjectType> = (project): React.ReactElement => {
  return (
    <div className="detail">
      <div className="img">
        <img alt="" src={project.img} />
      </div>
      <div className="detail-info">
        <div className="detail-name">{project.name}</div>
        <div className="detail-address">{project.address}</div>
      </div>
    </div>
  );
};

export default DetailProject;

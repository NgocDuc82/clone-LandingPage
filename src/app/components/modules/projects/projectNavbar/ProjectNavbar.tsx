import React from "react";


const ProjectNavbar: React.FC = (): React.ReactElement => {
 

  return (
    <div className="projectNavbar">
      <div className="projectNavbar-title">Projects</div>
      <ul className="menu-list">
        <li className="menu-item first-item">All</li>
        <li className="menu-item">Commercail</li>
        <li className="menu-item">Residential</li>
        <li className="menu-item">Other</li>
      </ul>
    </div>
  );
};
export default ProjectNavbar;

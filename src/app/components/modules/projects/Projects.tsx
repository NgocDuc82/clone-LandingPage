import React from "react";
import 'app/styles/modules/Projects.scss'
import ListProject from 'app/components/modules/projects/listProject/ListProject';
import ProjectNavbar from 'app/components/modules/projects/projectNavbar/ProjectNavbar';
const Projects: React.FC = (): React.ReactElement => {
  return <div className="project">
    <ProjectNavbar />
    <ListProject />
  </div>;
};
export default Projects;

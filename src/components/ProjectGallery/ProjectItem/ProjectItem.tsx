// ProjectItem.tsx
import React from "react";
// Styles
import "./ProjectItem.css";
// Images
import images from "../../../assets/images";
// Commons
import CustomButton from "../../../common/CustomButton/CustomButton";

interface ProjectItemProps {
  projectList: (keyof typeof images)[];
  descriptions: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  projectList,
  descriptions,
}) => {
  return (
    <div className="project-image-container">
      {projectList.map((project, index) => (
        <div key={index} className="image-container slide-in-top-view">
          <img src={images[project]} alt={project} />
          <div className="overlay">
            <p>{descriptions[index]}</p>
            <CustomButton
              buttonLink="#"
              buttonText="VER WEB"
              buttonIcon="circle-right"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectItem;

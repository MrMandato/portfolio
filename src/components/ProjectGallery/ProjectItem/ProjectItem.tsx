import React from "react";
// Styles
import "./ProjectItem.css";
// Images
import images from "../../../assets/images";
// Commons
import CustomButton from "../../../common/CustomButton/CustomButton";
// Hooks
import { useIntersection } from "../../../hooks/useIntersection";
// Animations
import "../../../animations/animations.css";

interface ProjectItemProps {
  projectList: (keyof typeof images)[];
  descriptions: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  projectList,
  descriptions,
}) => {
  const { targetRef, isIntersecting } = useIntersection({ threshold: 0.3 });

  const animation = "bounce-in";

  return (
    <div
      className={`project-image-container`}
      ref={targetRef as React.RefObject<HTMLDivElement>}
    >
      {projectList.map((project, index) => (
        <div
          key={index}
          className={`image-container ${
            isIntersecting ? animation : "opacity-min"
          }`}
        >
          <img src={images[project]} alt={`Project ${index + 1}`} />
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

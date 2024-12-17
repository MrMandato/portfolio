// ProjectGallery.tsx
import React from "react";
// Styles
import "./ProjectGallery.css";
// Components
import ProjectItem from "./ProjectItem/ProjectItem";
// Images
import images from "../../assets/images";

const ProjectGallery: React.FC = () => {
  const projectList: (keyof typeof images)[] = [
    "Proyecto",
    "Proyecto",
    "Proyecto",
    "Proyecto",
    "Proyecto",
    "Proyecto",
  ];

  const descriptions: string[] = [
    "Proyecto 1",
    "Proyecto 2",
    "Proyecto 3",
    "Proyecto 4",
    "Proyecto 5",
    "Proyecto 6",
  ];

  return (
    <>
      <section id="projects" className="project-gallery-container">
        <h2>Proyectos Recientes</h2>
        <ProjectItem projectList={projectList} descriptions={descriptions} />
      </section>
    </>
  );
};

export default ProjectGallery;

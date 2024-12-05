// Styles
import "./ProjectGallery.css";
// Components
import ProjectItem from "./ProjectItem/ProjectItem";

const ProjectGallery = () => {
  const projectList = [
    "Proyecto",
    "Proyecto",
    "Proyecto",
    "Proyecto",
    "Proyecto",
    "Proyecto",
  ];

  const descriptions = [
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

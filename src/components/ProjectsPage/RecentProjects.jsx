// Styles
import "./styles/RecentProjects.css";
// Components
import ProjectImage from "./ProjectImage";

const RecentProjects = () => {
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
      <section id="projects" className="recent-projects-container">
        <h2>Proyectos Recientes</h2>
        <ProjectImage projectList={projectList} descriptions={descriptions} />
      </section>
    </>
  );
};

export default RecentProjects;

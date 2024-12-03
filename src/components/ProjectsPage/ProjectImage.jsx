// Styles
import "./styles/RecentProjects.css";
// Images
import images from "../../assets/images";
// Other
import PropTypes from "prop-types";

const ProjectImage = ({ projectList, descriptions }) => {
  return (
    <>
      <div className="project-image-container">
        {projectList.map((project, index) => {
          return (
            <>
              <div className="image-container scroll-anim">
                <img key={index} src={images[project]} />
                <div className="overlay">
                  <p> {descriptions[index]} </p>
                  <button className="overlay-btn">
                    <a href="#">VER WEB</a>
                    <i className="fa-solid fa-circle-right" />
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

ProjectImage.propTypes = {
  projectList: PropTypes.arrayOf(PropTypes.string).isRequired,
  descriptions: PropTypes.string.isRequired,
};

export default ProjectImage;

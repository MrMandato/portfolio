// Styles
import "./ProjectItem.css";
// Images
import images from "../../../assets/images";
// PropTypes
import PropTypes from "prop-types";
// Commons
import CustomButton from "../../../common/CustomButton/CustomButton";

const ProjectItem = ({ projectList, descriptions }) => {
  return (
    <>
      <div className="project-image-container">
        {projectList.map((project, index) => {
          return (
            <>
              <div className="image-container slide-in-top-view">
                <img key={index} src={images[project]} />
                <div className="overlay">
                  <p> {descriptions[index]} </p>
                  <CustomButton
                    buttonLink="#"
                    buttonText="VER WEB"
                    buttonIcon="circle-right"
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

ProjectItem.propTypes = {
  projectList: PropTypes.arrayOf(PropTypes.string).isRequired,
  descriptions: PropTypes.string.isRequired,
};

export default ProjectItem;

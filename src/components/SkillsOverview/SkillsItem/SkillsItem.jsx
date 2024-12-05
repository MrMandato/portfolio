// Styles
import "./SkillsItem.css";
// PropTypes
import PropTypes from "prop-types";

const SkillsItem = ({
  icon,
  title,
  description,
  languagesTitle,
  languages,
  tools,
}) => {
  return (
    <>
      <div className="card">
        {" "}
        <div className="card-icon">
          {" "}
          <i className={`fa-solid fa-${icon}`}></i>{" "}
        </div>{" "}
        <div className="card-header">
          {" "}
          <h2>{title}</h2> <p>{description}</p>{" "}
        </div>{" "}
        <div className="card-body">
          {" "}
          <h3> {languagesTitle} </h3>{" "}
          <div className="tags">
            {" "}
            {languages.map((language, index) => (
              <span key={index} className="tag">
                {language}
              </span>
            ))}{" "}
          </div>{" "}
          <h3>Herramientas que uso:</h3>{" "}
          <div className="tags">
            {" "}
            {tools.map((tool, index) => (
              <span key={index} className="tag">
                {tool}
              </span>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

SkillsItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  languagesTitle: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillsItem;

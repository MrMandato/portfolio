// Styles
import "./styles/Tool.css";
// Other
import PropTypes from "prop-types";

const Tool = ({
  icon,
  profession,
  description,
  tools,
  subtitle,
  subtitle2,
  tools2,
}) => {
  console.log(tools);
  return (
    <>
      <div className="tool">
        <div className="icon-container">
          <i className={`fa-solid fa-${icon}`}></i>
        </div>
        <div className="first-box">
          <h3>{profession}</h3>
          <p>{description}</p>
        </div>
        <div className="second-box">
          <h4>{subtitle}</h4>
          <ul>
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
        <div className="third-box">
          <h4>{subtitle2}</h4>
          <ul>
            {tools2.map((tool2, index) => (
              <li key={index}>{tool2}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

Tool.propTypes = {
  icon: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  subtitle: PropTypes.string.isRequired,
  subtitle2: PropTypes.string.isRequired,
  tools2: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tool;

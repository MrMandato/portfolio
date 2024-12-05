// Styles
import "./CustomButton.css";
// Other
import PropTypes from "prop-types";

const CustomButton = ({ buttonLink, buttonText, buttonIcon }) => {
  return (
    <>
      <button className="custom-button">
        <a href={buttonLink}> {buttonText} </a>
        <i className={`fa-solid fa-${buttonIcon}`}></i>
      </button>
    </>
  );
};

CustomButton.propTypes = {
  buttonLink: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string,
};

export default CustomButton;

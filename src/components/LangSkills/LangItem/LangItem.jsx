// Styles
import "./LangItem.css";
// Other
import PropTypes from "prop-types";

const LangItem = ({ langIcon, langColor }) => {
  return (
    <>
      <span
        className={`fa-brands fa-${langIcon} icon`}
        style={{ color: `#${langColor}` }}
      />
    </>
  );
};

LangItem.propTypes = {
  langIcon: PropTypes.string.isRequired,
  langColor: PropTypes.string.isRequired,
};

export default LangItem;

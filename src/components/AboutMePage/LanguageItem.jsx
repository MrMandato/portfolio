// Styles
import "./styles/LanguageItem.css";
// Other
import PropTypes from "prop-types";

const LanguageItem = ({ iconName, color }) => {
  return (
    <>
      <span
        className={`fa-brands fa-${iconName} icon`}
        style={{ color: `#${color}` }}
      />
    </>
  );
};

LanguageItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default LanguageItem;

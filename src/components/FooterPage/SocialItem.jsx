// Other
import PropTypes from "prop-types";
// Styles
import "./styles/SocialItem.css";

const SocialItem = ({ iconNames, link }) => {
  return (
    <>
      {iconNames.map((iconName, index) => {
        return (
          <div className="media-container" key={index}>
            <a href={link[index]} target="_blank">
              <span className={`fa-brands fa-${iconName}`} />
            </a>
          </div>
        );
      })}
    </>
  );
};

SocialItem.propTypes = {
  iconNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string,
};

export default SocialItem;

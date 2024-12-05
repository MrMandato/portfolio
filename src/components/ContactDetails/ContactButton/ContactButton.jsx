// PropTypes
import PropTypes from "prop-types";
// Styles
import "./ContactButton.css";

const ContactButton = ({ buttons, text }) => {
  return (
    <>
      {buttons.map((button, index) => {
        return (
          <>
            <button key={index} className="contact-btn">
              <a href={button}> {text[index]} </a>
            </button>
          </>
        );
      })}
    </>
  );
};

ContactButton.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactButton;

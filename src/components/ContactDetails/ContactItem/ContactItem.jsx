// Styles
import "./ContactItem.css";
// PropTypes
import PropTypes from "prop-types";

const ContactItem = ({ inputs, field }) => {
  return (
    <>
      {inputs.map((input, index) => {
        return (
          <>
            <div key={index} className="input">
              <h3>{field[index]}</h3>
              <h2> {input} </h2>
            </div>
          </>
        );
      })}
    </>
  );
};

ContactItem.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.string).isRequired,
  field: PropTypes.string.isRequired,
};

export default ContactItem;

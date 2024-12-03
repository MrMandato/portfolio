// Other
import PropTypes from "prop-types";
// Styles
import "./styles/BoxItem.css";

const BoxItem = ({ boxes, field }) => {
  return (
    <>
      {boxes.map((box, index) => {
        return (
          <>
            <div key={index} className="box">
              <h3> {field[index]} </h3>
              <h2> {box} </h2>
            </div>
          </>
        );
      })}
    </>
  );
};

BoxItem.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.string),
  field: PropTypes.string.isRequired,
};

export default BoxItem;

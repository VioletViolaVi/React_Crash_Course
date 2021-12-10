import PropTypes from "prop-types";

const Button = ({ myColour, myText, myOnClick }) => {
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: myColour }}
        onClick={myOnClick}
      >
        {myText}
      </button>
    </div>
  );
};

Button.defaultProps = {
  myColour: "steelblue",
};

Button.propTypes = {
  myText: PropTypes.string,
  myColour: PropTypes.string,
  myOnClick: PropTypes.func,
};

export default Button;

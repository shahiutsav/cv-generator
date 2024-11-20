import "../styles/TextInput.css";
import PropTypes from "prop-types";

const TextInput = ({ labelName }) => {
  return (
    <>
      <div className="text-input">
        <label htmlFor={formatIDForLabel(labelName)}>{labelName}</label>
        <input type="text" id={formatIDForLabel(labelName)} />
      </div>
    </>
  );
};

TextInput.propTypes = {
  labelName: PropTypes.string,
};

function formatIDForLabel(id) {
  return id.replace(/ /g, "_").toLowerCase();
}

export default TextInput;

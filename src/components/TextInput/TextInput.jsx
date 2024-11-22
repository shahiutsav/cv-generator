import styles from "./TextInput.module.css";
import PropTypes from "prop-types";

const TextInput = ({ labelName, value, onChange, style }) => {
  return (
    <>
      <div className={styles.textInput} style={style}>
        <label htmlFor={formatIDForLabel(labelName)}>{labelName}</label>
        <input
          type="text"
          id={formatIDForLabel(labelName)}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

TextInput.propTypes = {
  labelName: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

function formatIDForLabel(id) {
  return id.replace(/ /g, "_").toLowerCase();
}

export default TextInput;

import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Input = ({ label, name, ...props }) => {
  return (
    <label class="gc-input-label" {...props}>
      {label}
      <input type="text" name={name} />
    </label>
  );
};

Input.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  label: "",
  name: "",
};

export default Input;

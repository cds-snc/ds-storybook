import React from "react";
import PropTypes from "prop-types";
import Label from "../Label/Label";

/**
 * Primary UI component for user interaction
 */
export const Input = ({ label, name, ...props }) => {
  return (
    <React.Fragment>
      <Label for={name}>{label}</Label>
      <input type="text" name={name} className="gc-input-text" />
    </React.Fragment>
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

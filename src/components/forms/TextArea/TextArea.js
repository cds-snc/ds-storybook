import React from "react";
import PropTypes from "prop-types";
import Label from "../Label/Label";

/**
 * Primary UI component for user interaction
 */
export const TextArea = ({ label, name, ...props }) => {
  return (
    <React.Fragment>
      <Label for={name}>{label}</Label>
      <textarea
        name={name}
        value=""
        onChange={props.handleChange}
        className="gc-textarea"
        aria-required="true"
        aria-invalid="false"
        rows="10"
        cols="50"
      ></textarea>
    </React.Fragment>
  );
};

TextArea.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  /**
   * Optional click handler
   */
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  label: "",
  name: "",
  onChange: undefined,
};

export default TextArea;

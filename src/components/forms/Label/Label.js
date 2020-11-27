import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Label = ({ label, children, ...props }) => {
  return (
    <label for={props.for} className="gc-label" {...props}>
      {label}      
      {children}
    </label>
  );
};

Label.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  for: PropTypes.string
};

Label.defaultProps = {
  label: "",
  for: "",
};

export default Label;

import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({ label, ...props }) => {
  return (
    <label class="gc-checkbox-label">
      <input checked type="checkbox" class="gc-checkbox" {...props}/>
      <span class="ml-4">{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  label: "",
  onClick: undefined,
};

export default Checkbox;

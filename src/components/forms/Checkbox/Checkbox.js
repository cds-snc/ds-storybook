import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({ label, checked, ...props }) => {
  return (
    <label class="gc-label">
      <input checked={checked} type="checkbox" class="gc-checkbox" {...props}/>
      <span class="ml-4">{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  label: "",
  checked: false,
  onClick: undefined,
};

export default Checkbox;

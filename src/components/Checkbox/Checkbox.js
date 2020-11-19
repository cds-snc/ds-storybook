import React from "react";
import PropTypes from "prop-types";
import "./checkbox.css";

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({ label }) => {
  return (
    <label class="form-gc-checkbox--label">
      <input checked type="checkbox" class="form-gc-checkbox" />
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
  label: "Checkbox Example",
  onClick: undefined,
};

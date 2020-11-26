import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Textbox = ({ label, ...props }) => {
  return (
    <label class="gc-textbox-label">
      <textbox checked type="textbox" class="gc-textbox" {...props}/>
      <span class="ml-4">{label}</span>
    </label>
  );
};

Textbox.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Textbox.defaultProps = {
  label: "",
  onClick: undefined,
};

export default Textbox;

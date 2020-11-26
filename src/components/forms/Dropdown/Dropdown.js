import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Dropdown = ({ label, options, ...props }) => {
  const dropdownItems = options.map((option) => (
    <option value={option.value}>option.text</option>
  ));

  return (
    <select
      class="gc-dropdown"
      name="support_type" onChange={props.onChange}
    >
      {dropdownItems}
    </select>
  );
};

Dropdown.propTypes = {
  /**
   * How large should the button be?
   */
  options: PropTypes.array,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Dropdown.defaultProps = {
  label: "",
  options: [],
  onChange: () => {},
};

export default Dropdown;

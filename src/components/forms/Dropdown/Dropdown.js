import React from "react";
import PropTypes from "prop-types";
import Label from "../Label/Label";

/**
 * Primary UI component for user interaction
 */
export const Dropdown = ({ label, options, ...props }) => {
  const dropdownItems = options.map((option) => (
    <option value={option.value}>{option.text}</option>
  ));

  return (
    <React.Fragment>      
      <Label for={props.name}>Select an option:</Label>
      <select class="gc-dropdown" name={props.name} onChange={props.onChange}>
        {dropdownItems}
      </select>
    </React.Fragment> 
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
  name: PropTypes.string,
  /**
   * Optional click handler
   */
  onChange: PropTypes.func,
};

Dropdown.defaultProps = {
  label: "",
  options: [],
  onChange: () => {},
};

export default Dropdown;

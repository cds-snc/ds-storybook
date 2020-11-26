import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Header = ({ children, ...props }) => {
  return <div {...props}>Header goes here {children} </div>;
};

Header.propTypes = {
  /**
   * Header items
   */
  children: PropTypes.object,
};

Header.defaultProps = {
  children: null,
};

export default Header;

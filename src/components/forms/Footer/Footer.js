import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Footer = ({ children, ...props }) => {
  return <div {...props}>Footer goes here {children} </div>;
};

Footer.propTypes = {
  /**
   * Footer items
   */
  children: PropTypes.object,
};

Footer.defaultProps = {
  children: null,
};

export default Footer;

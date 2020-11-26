import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({label, ...props }) => { 
  return (
    <button
      type="button"
      className="gc-button button"     
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {  
  size: 'medium',
  onClick: undefined,
};


export default Button;
import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Header = ({ children, ...props }) => {
  return (
    <header {...props}>
      <div class="container mx-auto">
        <div class="md:flex justify-between py-10">
          <div class="canada-flag">
            <a href="/" aria-label="Government of Canada">
              <img
                class="w-84 mb-5 md:mb-0"
                src="/gc-logo-expanded.svg"
                alt="Government of Canada"
              />
            </a>
          </div>

          <div>
            <a href="#" lang="fr" class="text-xl">
              Français
            </a>
          </div>
        </div>
      </div>
    </header>
  );
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

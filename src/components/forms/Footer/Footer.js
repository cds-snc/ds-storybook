import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Footer = ({ children, ...props }) => {
  return (
    <footer class="border-0 bg-gray-100 mt-8m px-10">
      <div class="flex flex-row justify-between md:items-baseline pt-4 md:pt-10 pb-6 md:pb-10">
        <div class="footer-links md:w-4/5">
          <ul class="p-0 text-base list-inside">
            <li class="md:inline-block pr-4">
              <a href="/" class="no-underline hover:underline">
                Contact
              </a>
            </li>
            <li class="md:inline-block pr-4">
              <a href="/" class="no-underline hover:underline">
                Privacy
              </a>
            </li>
            <li class="md:inline-block">
              <a href="/" class="no-underline hover:underline">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
        <div class="md:w-1/5 md:relative">
          <img
            src="/gc-logo.svg"
            alt="GC"
            class="h-12 pt-2 md:absolute md:bottom-0 md:right-0"
          />
        </div>
      </div>
    </footer>
  );
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

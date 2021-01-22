import React from "react";
import classnames from "classnames";

interface SectionHeaderProps {
  children: string;
  id?: string;
  className?: string;
}

export const SectionHeader = (props: SectionHeaderProps): React.ReactElement => {
  const { children, className, id } = props;

  const classes = classnames("gc-section-header font-bold text-2xl pb-6", className);

  return (
      <h2 data-testid="SectionHeader" className={classes} id={id}>
        {children}
      </h2>
  );
};

export default SectionHeader;


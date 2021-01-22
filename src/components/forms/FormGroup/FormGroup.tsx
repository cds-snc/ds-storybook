import React from "react";
import classnames from "classnames";

interface FormGroupProps {
  children: React.ReactNode;
  name: string;
  legend?: React.ReactNode;
  legendSrOnly?: boolean;
  className?: string;
  error?: boolean;
}

export const FormGroup = (props: FormGroupProps): React.ReactElement => {
  const { name, children, className, error, legendSrOnly, legend } = props;

  const classes = classnames(
    "gc-form-group",
    { "gc-form-group--error": error },
    className
  );

  const legendClasses = classnames("gc-legend", {
    "gc-sr-only": legendSrOnly,
  });

  return (
    <fieldset name={name} data-testid="formGroup" className={classes}>
      {legend && <legend className={legendClasses}>{legend}</legend>}
      {children}
    </fieldset>
  );
};

export default FormGroup;

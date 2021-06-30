import React from "react";
import classnames from "classnames";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export interface TextAreaProps {
  id: string;
  name: string;
  className?: string;
  required?: boolean;
  children?: React.ReactNode;
  ariaDescribedBy?: string;
  placeholder?: string;
  error?: string;
}

export const TextArea = (
  props: TextAreaProps & JSX.IntrinsicElements["textarea"]
): React.ReactElement => {
  const {
    id,
    className,
    ariaDescribedBy,
    required,
    children,
    placeholder,
    value,
    error,
  } = props;

  const classes = classnames("gc-textarea", className);

  return (
    <>
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      <textarea
        data-testid="textarea"
        className={classes}
        id={id}
        required={required}
        aria-describedby={ariaDescribedBy}
        placeholder={placeholder}
        value={value}
      >
        {children}
      </textarea>
    </>
  );
};

export default TextArea;

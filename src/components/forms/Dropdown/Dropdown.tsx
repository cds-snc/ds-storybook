import React from "react";
import classnames from "classnames";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface DropdownProps {
  id: string;
  name: string;
  className?: string;
  value: string | number;
  error?: string;
  choices: Array<string | number>;
  required?: boolean;
  ariaDescribedBy?: string;
}

interface DropdownOptionProps {
  name: string | number;
  value: string | number;
}

const DropdownOption = (props: DropdownOptionProps): React.ReactElement => {
  return <option value={props.value}>{props.name}</option>;
};

export const Dropdown = (props: DropdownProps): React.ReactElement => {
  const { id, className, choices, required, ariaDescribedBy } = props;

  const classes = classnames("gc-dropdown", className);

  let options = null;
  if (choices && choices.length) {
    options = choices.map((choice, i) => {
      const innerId = `${id}-${i}`;
      const value = props.value;
      return (
        <DropdownOption key={`key-${innerId}`} value={value} name={choice} />
      );
    });
  }

  return (
    <>
      {props.error ? <ErrorMessage>{props.error}</ErrorMessage> : null}

      <select
        data-testid="dropdown"
        className={classes}
        id={id}
        required={required}
        aria-describedby={ariaDescribedBy}
        value={props.value}
      >
        {options}
      </select>
    </>
  );
};

export default Dropdown;

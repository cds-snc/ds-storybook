import React from "react";
import FormGroup from "../FormGroup/FormGroup";
import Radio from "../Radio/Radio";
import Label from "../Label/Label";

interface MultipleChoiceProps {
  options: string[];
  label?: string;
  id?: string;
  className?: string;
}

export const MultipleChoice = (
  props: MultipleChoiceProps
): React.ReactElement => {
  const { options = [], id, label } = props;

  return (
    <FormGroup name={`${id}`}>
      {label ? <Label htmlFor={`${id}`}>{label}</Label> : null}
      {options.map((listItem, index) => (
        <Radio
          name={`${id}`}
          key={`key-${id}-${index}`}
          id={`id-${id}-${index}`}
          label={listItem}
          value={listItem}
        />
      ))}
    </FormGroup>
  );
};

export default MultipleChoice;

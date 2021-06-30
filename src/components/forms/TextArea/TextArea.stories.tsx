import React from "react";
import { TextArea } from "./TextArea";

export default {
  title: "Forms/TextArea",
  component: TextArea,
  parameters: {
    info: `TextArea component`,
  },
};

export const defaultTextArea = (): React.ReactElement => (
  <TextArea id="input-type-text" name="input-type-text" />
);

export const withDefaultValue = (): React.ReactElement => (
  <TextArea
    id="input-type-text"
    name="input-type-text"
    defaultValue="Change me"
  />
);

export const withPlaceholder = (): React.ReactElement => (
  <TextArea
    id="input-type-text"
    name="input-type-text"
    placeholder="Enter value"
  />
);

export const disabled = (): React.ReactElement => (
  <TextArea id="input-type-text" name="input-type-text" disabled />
);

export const readonly = (): React.ReactElement => (
  <TextArea id="input-type-text" name="input-type-text" readOnly />
);

defaultTextArea.parameters = {
  docs: {
    source: {
      code:
        '<label class="gc-textarea-label"><span class="ml-4">Enter text</span><textarea class="gc-textarea"></textarea></label>',
    },
  },
};

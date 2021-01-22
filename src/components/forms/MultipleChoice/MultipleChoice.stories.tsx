import React from "react";
import { MultipleChoice } from "./MultipleChoice";

export default {
  title: "Forms/MultipleChoice",
  component: MultipleChoice,
  parameters: {
    info: `MultipleChoice component`,
  },
};

export const defaultMultipleChoice = (): React.ReactElement => (
  <MultipleChoice
    id="1"
    label="Funding Requested"
    options={["Community accessibility", "Workplace accessibility"]}
  />
);

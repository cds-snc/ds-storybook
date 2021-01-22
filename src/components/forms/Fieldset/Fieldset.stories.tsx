import React from "react";
import { Fieldset } from "./Fieldset";

import { Label } from "../Label/Label";
import { TextInput } from "../TextInput/TextInput";
import { Description } from "../Description/Description";

export default {
  title: "Forms/Fieldset",
  component: Fieldset,
  parameters: {
    info: `Fieldset component`,
  },
};

export const nameFieldset = (): React.ReactElement => (
  <Fieldset legend="Please enter your name in the fields below">
    <Label htmlFor="title" hint=" (optional)">
      Title
    </Label>
    <Description>Examples: Mister, Doctor etc.</Description>
    <TextInput id="title" name="title" type="text" inputSize="small" />
    <Label htmlFor="first-name">First name</Label>
    <TextInput id="first-name" name="first-name" type="text" />
    <Label htmlFor="middle-name" hint=" (optional)">
      Middle name
    </Label>
    <Description>If you have two, please specify both</Description>
    <TextInput id="middle-name" name="middle-name" type="text" />
    <Label htmlFor="last-name">Last name</Label>
    <TextInput id="last-name" name="last-name" type="text" />
  </Fieldset>
);

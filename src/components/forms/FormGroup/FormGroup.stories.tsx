import React from "react"
import { FormGroup } from "./FormGroup"

import { Label } from "../Label/Label"
import { TextInput } from "../TextInput/TextInput"
import { ErrorMessage } from "../ErrorMessage/ErrorMessage"
import { Description } from "../Description/Description"

export default {
  title: "Forms/FormGroup",
  component: FormGroup,
  parameters: {
    info: `
USWDS 2.0 FormGroup component

Source: https://designsystem.digital.gov/components/form-templates/
`,
  },
}

export const textInputFormGroup = (): React.ReactElement => (
  <FormGroup name="1">
    <Label htmlFor="input-type-text">Please enter your email address</Label>
    <Description>Example: jonbovi@gmail.com</Description>
    <TextInput id="input-type-text" name="input-type-text" type="text" />
  </FormGroup>
)

export const textInputErrorFormGroup = (): React.ReactElement => (
  <FormGroup name="1" error>
    <Label htmlFor="input-type-text" error>
    Please enter your email address
    </Label>
    <Description>Example: jonbovi@gmail.com</Description>
    <ErrorMessage>Helpful error message</ErrorMessage>
    <TextInput
      id="input-type-text"
      name="input-type-text"
      type="text"
      validationStatus="error"
    />
  </FormGroup>
)

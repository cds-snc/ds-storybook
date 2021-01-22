import React from "react";
import Layout from "./Layout";
import H1 from "../H1/H1";
import H2 from "../H2/H2";
import Label from "../Label/Label";
import Paragraph from "../Paragraph/Paragraph";
import Radio from "../Radio/Radio";
import { Fieldset } from "../Fieldset/Fieldset";

export default {
  title: "Forms/Layout",
  component: Layout,
  parameters: {
    info: `Layout`,
  },
};

export const defaultLayout = (): React.ReactElement => (
  <Layout>
    <H1 heading="Grant Application for Funding – Enabling Accessibility Fund (EAF) - Small Projects Component" />
    <Fieldset legend="Accessibility Fund (EAF) - Small Projects Component">
      <Paragraph text="The Enabling Accessibility Fund provides funding for eligible capital projects that increase accessibility for people with disabilities in Canadian communities and workplaces. It creates more opportunities for people with disabilities to participate in." />
      <Label htmlFor="fundingRequested">Funding Requested</Label>
      <ul>
        <li>
          <Radio
            id="input-radio"
            name="input-radio"
            label="Community Accessibility"
          />
        </li>
        <li>
          <Radio
            id="input-radio"
            name="input-radio"
            label="Workplace Accessibility"
          />
        </li>
      </ul>
      <Label htmlFor="projectCategory">Project Category</Label>
      <ul>
        <li>
          <Radio id="input-radio" name="input-radio" label="Ramp" />
        </li>
        <li>
          <Radio
            id="input-radio"
            name="input-radio"
            label="Accessible Washroom"
          />
        </li>
        <li>
          <Radio id="input-radio" name="input-radio" label="Accessible Door" />
        </li>
        <li>
          <Radio id="input-radio" name="input-radio" label="Other Project" />
        </li>
      </ul>
    </Fieldset>
  </Layout>
);

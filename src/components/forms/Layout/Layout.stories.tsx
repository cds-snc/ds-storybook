import React from "react";
import Layout from "./Layout";
import H1 from "../H1/H1";
import H2 from "../H2/H2";
import SectionHeader from "../SectionHeader/SectionHeader";
import MultipleChoice from "../MultipleChoice/MultipleChoice";
import Paragraph from "../Paragraph/Paragraph";
import FormGroup from "../FormGroup/FormGroup";

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
    <FormGroup
      name="EAF form"
      legend="Accessibility Fund (EAF) - Small Projects Component"
    >
      <Paragraph text="The Enabling Accessibility Fund provides funding for eligible capital projects that increase accessibility for people with disabilities in Canadian communities and workplaces. It creates more opportunities for people with disabilities to participate in." />
      <MultipleChoice
        label="Funding Requested"
        options={["Community Accessibility", "Workplace Accessibility"]}
      />
      <MultipleChoice
        label="Project Category"
        options={[
          "Ramp",
          "Accessible Washroom",
          "Accessible Door",
          "Other Project",
        ]}
      />
      <SectionHeader>Organization Primary Address</SectionHeader>
    </FormGroup>
  </Layout>
);

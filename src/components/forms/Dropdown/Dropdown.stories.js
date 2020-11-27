// MyComponent.stories.js

import React from "react";
import Dropdown from "./Dropdown";

export default {
  title: "Forms/Atoms/Dropdown",
  component: Dropdown,
};

const optionsArray = [
  {
    key: "GC Form - First option",
    text: "GC Form - First option",
    value: "GC Form - First option"    
  },
  {
    key: "GC Form - Second option",
    text: "GC Form - Second option",
    value: "GC Form - Second option"    
  }
];

export const Default = () => (
  <Dropdown label="Options" options={optionsArray} />
);
Default.parameters = {
  docs: { 
      source: { 
          code: '<select class="gc-dropdown" name="support_type"><option value="GC Form - First option">GC Form - First option</option><option value="GC Form - Second option">GC Form - Second option</option></select>'
      }    
  },
};
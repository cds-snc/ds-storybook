// MyComponent.stories.js

import React from "react";
import Dropdown from "./Dropdown";

export default {
  title: "Forms/Atoms/Dropdown",
  component: Dropdown,
};

const optionsArray = [
  {
    key: "Matt",
    text: "Matt",
    value: "Matt",
    image: { avatar: true, src: "/images/avatar/small/matt.jpg" },
  },
  {
    key: "Justen Kitsune",
    text: "Justen Kitsune",
    value: "Justen Kitsune",
    image: { avatar: true, src: "/images/avatar/small/justen.jpg" },
  },
];

export const Default = () => (
  <Dropdown label="Options" options={optionsArray} />
);

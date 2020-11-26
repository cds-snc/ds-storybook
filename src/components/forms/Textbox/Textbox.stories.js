// MyComponent.stories.js

import React from 'react';
import Textbox from './Textbox';

export default {
  title: 'Forms/Atoms/Textbox',
  component: Textbox,
};

export const Default = () => <Textbox label="Next"/>;

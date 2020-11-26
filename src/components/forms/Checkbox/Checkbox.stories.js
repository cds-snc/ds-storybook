// MyComponent.stories.js

import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Forms/Atoms/Checkbox',
  component: Checkbox,
};

export const Default = () => <Checkbox label="Check this box"/>;

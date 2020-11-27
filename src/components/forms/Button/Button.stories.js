// MyComponent.stories.js

import React from 'react';
import Button from './Button';

export default {
  title: 'Forms/Atoms/Button',
  component: Button,
};

export const Default = () => <Button label="Next"/>;
Default.parameters = {
  docs: { 
      source: { 
          code: '<button type="button" class="gc-button button">Next</button>'
      }    
  },
};
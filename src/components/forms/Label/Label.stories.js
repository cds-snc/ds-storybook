// MyComponent.stories.js

import React from 'react';
import Label from './Label';

export default {
  title: 'Forms/Atoms/Label',
  component: Label,
};

export const Default = () => <Label label="Text Label"/>;
Default.parameters = {
  docs: { 
      source: { 
          code: '<label class="gc-input-label">Text Input<input type="text" name="" class="gc-input-text"></label>'
      }    
  },
};
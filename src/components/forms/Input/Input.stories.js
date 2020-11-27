// MyComponent.stories.js

import React from 'react';
import Input from './Input';

export default {
  title: 'Forms/Atoms/Input',
  component: Input,
};

export const Default = () => <Input label="Text Input" name="test" />;
Default.parameters = {
  docs: { 
      source: { 
          code: '<label class="gc-input-label">Text Input<input type="text" name="" class="gc-input-text"></label>'
      }    
  },
};
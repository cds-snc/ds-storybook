// MyComponent.stories.js

import React from 'react';
import TextArea from './TextArea';

export default {
  title: 'Forms/Atoms/TextArea',
  component: TextArea,
};

export const Default = () => <TextArea label="Enter text"/>;
Default.parameters = {
  docs: { 
      source: { 
          code: '<label class="gc-textarea-label"><span class="ml-4">Enter text</span><textarea class="gc-textarea"></textarea></label>'
      }    
  },
};

// MyComponent.stories.js

import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Forms/Atoms/Checkbox',
  component: Checkbox,
};

export const Default = () => (
  <React.Fragment>
  <Checkbox label="Unchecked"/>
  <Checkbox label="Checked" checked={true}/>
  </React.Fragment>
);
Default.parameters = {
  docs: { 
      source: { 
          code: '<label class="gc-checkbox-label"><input type="checkbox" class="gc-checkbox" checked=""><span class="ml-4">Check this box</span></label>'
      }    
  },
};

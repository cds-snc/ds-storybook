import { Checkbox } from '../components/Checkbox';

export default {
  title: 'Design System/Atoms/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Checkbox Example'
};
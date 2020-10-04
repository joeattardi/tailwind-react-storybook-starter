import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button
};

const Template = args => <Button {...args}>Button</Button>;

export const FirstStory = Template.bind({});
FirstStory.args = { label: 'Button' };

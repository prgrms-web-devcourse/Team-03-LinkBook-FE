import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: '',
      control: 'text',
    },
    type: {
      defaultValue: 'submit',
    },
    version: {
      defaultValue: '',
      control: { type: 'radio' },
      options: ['navBar', 'mainLight', ''],
    },
  },
} as ComponentMeta<typeof Button>;
export const Default: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}></Button>;
};

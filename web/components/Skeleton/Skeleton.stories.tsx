import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Skeleton from './Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    width: { defaultValue: 200, control: 'number' },
    height: { defaultValue: 100, control: 'number' },
  },
} as ComponentMeta<typeof Skeleton>;
export const Default: ComponentStory<typeof Skeleton> = (args) => {
  return <Skeleton {...args}></Skeleton>;
};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    size: {
      defaultValue: '14px',
      type: { name: 'string' },
    },
    weight: {
      type: { name: 'string' },
    },
    version: {
      type: { name: 'string' },
    },
  },
} as ComponentMeta<typeof Text>;
export const Default: ComponentStory<typeof Text> = (args) => {
  return <Text {...args}>프론트엔드 개발자를 위한 학습 로드맵</Text>;
};

export const Header: ComponentStory<typeof Text> = (args) => {
  return (
    <Text version="header" {...args}>
      프론트엔드 개발자를 위한 학습 로드맵
    </Text>
  );
};

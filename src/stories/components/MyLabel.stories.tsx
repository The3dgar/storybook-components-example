import { ButtonProps, MyLabel } from '../../components/MyLabel';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['normal', 'h1', 'h2', 'h3'],
      }
    },
    color: {
      control: {
        type: 'color',
      }
    }
  }
} as ComponentMeta<typeof MyLabel>;

const template: ComponentStory<typeof MyLabel> = (args:ButtonProps) => <MyLabel {...args} />;

export const Basic = template.bind({})
Basic.args = {
  label: 'Basic label',
}

export const AllCaps = template.bind({});
AllCaps.args = {
  label: 'All caps',
  allCaps: true,
}

export const Secondary = template.bind({});
Secondary.args = {
  label: 'Secondary',
  color: 'secondary',
}

export const Tertiary = template.bind({});
Tertiary.args = {
  label: 'Tertiary',
  color: 'tertiary',
}

export const FontColor = template.bind({});
Tertiary.args = {
  size: 'h1',
  fontColor: '#5517ac',
}

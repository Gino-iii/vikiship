import Button from './index';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'default', 'dashed', 'link', 'text'],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'middle', 'small'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

export const Default = {
  args: {
    children: 'Button',
  },
};

export const Primary = {
  args: {
    type: 'primary',
    children: 'Primary Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

export const Loading = {
  args: {
    loading: true,
    children: 'Loading Button',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
}; 

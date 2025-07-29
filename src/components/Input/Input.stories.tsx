import Input from './index';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['large', 'middle', 'small'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

export const Default = {
  args: {
    placeholder: '请输入内容',
  },
};

export const Large = {
  args: {
    size: 'large',
    placeholder: '大尺寸输入框',
  },
};

export const Small = {
  args: {
    size: 'small',
    placeholder: '小尺寸输入框',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    placeholder: '禁用状态',
  },
};

export const WithValue = {
  args: {
    value: '预设值',
    placeholder: '请输入内容',
  },
}; 

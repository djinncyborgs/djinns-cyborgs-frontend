import type {Meta, StoryObj} from '@storybook/nextjs-vite';
import type {ComponentProps} from 'react';
import {useState} from 'react';

import {Input} from './Input';

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

const ControlledInput = (args: ComponentProps<typeof Input>) => {
  const [value, setValue] = useState<string>(args.value || '');
  return <Input {...args} value={value} onChangeAction={setValue} />;
};

export const Default: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    ariaLabel: 'text',
    disabled: false,
    value: '',
    textOfPlaceholder: 'Enter text',
  },
};

export const Search: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    ariaLabel: 'search',
    disabled: false,
    value: '',
  },
};

export const Password: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    ariaLabel: 'password',
    title: 'Email',
    disabled: false,
    value: '',
  },
};

export const WithError: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    ariaLabel: 'text',
    error: true,
    errorText: 'Error text',
    value: '',
  },
};

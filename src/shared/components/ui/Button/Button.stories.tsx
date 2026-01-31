import type {Meta, StoryObj} from '@storybook/nextjs';

import {Button} from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,

  args: {
    children: 'Button',
    variant: 'primary',
    size: 'sm',
    disabled: false,
    type: 'button',
  },

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'text'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },

    onClick: {action: 'clicked'},
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const Primary: Story = {
  args: {variant: 'primary', children: 'Primary'},
};

export const Secondary: Story = {
  args: {variant: 'secondary', children: 'Secondary'},
};

export const Outline: Story = {
  args: {variant: 'outline', children: 'Outline'},
};

export const Text: Story = {
  args: {variant: 'text', children: 'Text'},
};

export const Disabled: Story = {
  args: {disabled: false, children: 'Disabled'},
};

export const Sizes: Story = {
  parameters: {controls: {exclude: ['size']}},
  render: (args) => (
    <div style={{display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap'}}>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};

export const Variants: Story = {
  parameters: {controls: {exclude: ['variant']}},
  render: (args) => (
    <div style={{display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap'}}>
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
    </div>
  ),
};

export const VariantsAndSizes: Story = {
  parameters: {controls: {exclude: ['variant', 'size']}},
  render: (args) => (
    <div style={{display: 'grid', gap: 12}}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size} style={{display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap'}}>
          <Button {...args} size={size} variant="primary">
            {`Primary ${size}`}
          </Button>
          <Button {...args} size={size} variant="secondary">
            {`Secondary ${size}`}
          </Button>
          <Button {...args} size={size} variant="outline">
            {`Outline ${size}`}
          </Button>
          <Button {...args} size={size} variant="text">
            {`Text ${size}`}
          </Button>
        </div>
      ))}
    </div>
  ),
};

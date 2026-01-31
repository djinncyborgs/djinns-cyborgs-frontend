import type {Meta, StoryObj} from '@storybook/nextjs-vite';

import {EmailSuccessConfirmation} from './EmailSuccessConfirmation';

const meta: Meta<typeof EmailSuccessConfirmation> = {
  title: 'UI/EmailSuccessConfirmation',
  component: EmailSuccessConfirmation,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <EmailSuccessConfirmation />,
};

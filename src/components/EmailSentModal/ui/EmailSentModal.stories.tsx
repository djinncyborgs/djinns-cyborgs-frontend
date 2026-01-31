import type {Meta, StoryObj} from '@storybook/nextjs-vite';

import {EmailSentModal} from './EmailSentModal';

const meta: Meta<typeof EmailSentModal> = {
  title: 'UI/EmailSentModal',
  component: EmailSentModal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <EmailSentModal />,
};

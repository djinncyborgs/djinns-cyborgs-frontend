import type {Meta, StoryObj} from '@storybook/nextjs-vite';
import React from 'react';

import {Typography, TypographyVariant} from './Typography';

const VARIANTS: TypographyVariant[] = [
  'large',
  'h1',
  'h2',
  'h3',
  'text-l',
  'text-l-bold',
  'text-m',
  'text-m-medium',
  'text-m-bold',
  'text-s',
  'text-s-semibold',
  'link-m',
  'link-s',
];

const meta = {
  title: 'Shared/Typography',
  component: Typography,
  args: {
    variant: 'text-m',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: VARIANTS,
    },
    as: {
      control: 'select',
      options: ['default', 'span', 'p', 'h1', 'h2', 'h3', 'a'],
      mapping: {
        default: undefined,
        span: 'span',
        p: 'p',
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        a: 'a',
      },
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div style={{display: 'grid', gap: 16}}>
      {VARIANTS.map((variant) => {
        const isLink = variant.startsWith('link-');
        const linkProps = isLink
          ? {
              href: '#',
              onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
                event.preventDefault();
              },
            }
          : {};

        return (
          <div key={variant} style={{display: 'grid', gap: 6}}>
            <Typography variant="text-s" as="span">
              {variant}
            </Typography>
            <Typography variant={variant} {...linkProps}>
              The quick brown fox jumps over the lazy dog.
            </Typography>
          </div>
        );
      })}
    </div>
  ),
};

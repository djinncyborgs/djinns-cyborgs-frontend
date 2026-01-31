import clsx from 'clsx';
import React from 'react';
import {ComponentPropsWithoutRef, ElementType, JSX} from 'react';

import styles from './Typography.module.scss';

export type TypographyVariant =
  | 'large'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'text-l'
  | 'text-l-bold'
  | 'text-m'
  | 'text-m-medium'
  | 'text-m-bold'
  | 'text-s'
  | 'text-s-semibold'
  | 'link-m'
  | 'link-s';

type VariantConfig = {
  defaultTag: keyof JSX.IntrinsicElements;
  className: string;
};

const VARIANTS: Record<TypographyVariant, VariantConfig> = {
  large: {defaultTag: 'h1', className: styles.textLarge},

  h1: {defaultTag: 'h1', className: styles.textH1},
  h2: {defaultTag: 'h2', className: styles.textH2},
  h3: {defaultTag: 'h3', className: styles.textH3},

  'text-l': {defaultTag: 'p', className: styles.textL},
  'text-l-bold': {defaultTag: 'p', className: styles.textLBold},

  'text-m': {defaultTag: 'p', className: styles.textM},
  'text-m-medium': {defaultTag: 'p', className: styles.textMMedium},
  'text-m-bold': {defaultTag: 'p', className: styles.textMBold},

  'text-s': {defaultTag: 'p', className: styles.textS},
  'text-s-semibold': {defaultTag: 'p', className: styles.textSSemibold},

  'link-m': {defaultTag: 'a', className: styles.textLinkM},
  'link-s': {defaultTag: 'a', className: styles.textLinkS},
};

type Props<T extends ElementType> = {
  variant: TypographyVariant;
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export function Typography<T extends ElementType = 'span'>({variant, as, className, children, ...props}: Props<T>) {
  const {defaultTag, className: variantClass} = VARIANTS[variant];
  const Component = (as ?? defaultTag) as ElementType;

  return (
    <Component className={clsx(styles.text, variantClass, className)} {...props}>
      {children}
    </Component>
  );
}

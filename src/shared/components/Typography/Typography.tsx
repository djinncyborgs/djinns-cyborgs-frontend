import clsx from 'clsx';
import {ComponentPropsWithoutRef, ElementType, JSX} from 'react';
import React from 'react';

import styles from './Typography.module.scss';

export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body16'
  | 'body16Bold'
  | 'body14'
  | 'body14Medium'
  | 'body14Bold'
  | 'caption'
  | 'captionSemibold'
  | 'link14'
  | 'link12';

type VariantConfig = {
  defaultTag: keyof JSX.IntrinsicElements;
  className: string;
};

const VARIANTS: Record<TypographyVariant, VariantConfig> = {
  display: {defaultTag: 'h1', className: styles.display},
  h1: {defaultTag: 'h1', className: styles.h1},
  h2: {defaultTag: 'h2', className: styles.h2},
  h3: {defaultTag: 'h3', className: styles.h3},

  body16: {defaultTag: 'p', className: styles.body16},
  body16Bold: {defaultTag: 'p', className: styles.body16Bold},

  body14: {defaultTag: 'p', className: styles.body14},
  body14Medium: {defaultTag: 'p', className: styles.body14Medium},
  body14Bold: {defaultTag: 'p', className: styles.body14Bold},

  caption: {defaultTag: 'p', className: styles.caption},
  captionSemibold: {defaultTag: 'p', className: styles.captionSemibold},

  link14: {defaultTag: 'a', className: styles.link14},
  link12: {defaultTag: 'a', className: styles.link12},
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
    <Component className={clsx(styles.root, variantClass, className)} {...props}>
      {children}
    </Component>
  );
}

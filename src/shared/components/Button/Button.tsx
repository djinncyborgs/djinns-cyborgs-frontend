import clsx from 'clsx';
import {ComponentPropsWithoutRef} from 'react';

import s from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';
type Props = {
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({variant = 'primary', size = 'sm', className, disabled, type = 'button', ...rest}: Props) => {
  return (
    <button type={type} className={clsx(s.button, s[variant], s[size], className)} disabled={disabled} {...rest} />
  );
};

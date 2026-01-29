'use client';

import React, {useState} from 'react';

import {EyeIcon} from '@/shared/icons/EyeIcon';
import {EyeOffIcon} from '@/shared/icons/EyeOffIcon';
import {SearchIcon} from '@/shared/icons/SearchIcon';

import styles from './input.module.scss';

type Props = {
  ariaLabel: string;
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  errorText?: string;
  title?: string;
};

export const Input = ({ariaLabel, disabled, value, onChange, error, errorText, title}: Props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const inputClassName = `${styles.input} ${
    ariaLabel === 'search' ? styles.search : ariaLabel === 'password' ? styles.password : ''
  }`;

  const placeholder = ariaLabel === 'search' ? 'Input search' : 'Epam@epam.com';

  const inputType = ariaLabel === 'password' ? (visible ? 'text' : 'password') : 'text';

  const inputContainerClassName = `${styles.inputContainer} ${error ? styles.inputContainerError : ''}`;

  return (
    <div className={styles.inputWrapper}>
      {ariaLabel === 'password' && <span className={styles.inputTitle}>{title ?? 'Email'}</span>}
      <div className={inputContainerClassName}>
        {ariaLabel === 'search' && (
          <SearchIcon className={styles.searchIcon} />
        )}

        <input
          type={inputType}
          placeholder={placeholder}
          className={inputClassName}
          aria-label={ariaLabel}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          disabled={disabled}
        />

        {ariaLabel === 'password' && value && (
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={toggleVisibility}
            aria-label={visible ? 'Hide password' : 'Show password'}
            disabled={disabled}
          >
            {visible ? <EyeOffIcon className={styles.icon} /> : <EyeIcon className={styles.icon} />}
          </button>
        )}
      </div>
      {error && <span className={styles.errorMessage}>{errorText ?? 'error text'}</span>}
    </div>
  );
};


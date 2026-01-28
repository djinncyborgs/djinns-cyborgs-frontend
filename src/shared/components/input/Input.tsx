'use client';

import Image from 'next/image';
import React, {useState} from 'react';

import styles from './input.module.scss';

type Props = {
  ariaLabel: string;
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  errorText?: string;
};

export const Input = ({ariaLabel, disabled, value, onChange, error, errorText}: Props) => {
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
      <div className={inputContainerClassName}>
        {ariaLabel === 'search' && (
          <Image className={styles.searchIcon} src="/search-outline.svg" alt={'search'} width={20} height={20} />
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
          >
            <Image src="/input-button.svg" alt={visible ? 'Hide password' : 'Show password'} width={24} height={24} />
          </button>
        )}
      </div>
      {error && <span className={styles.errorMessage}>{errorText ?? 'error text'}</span>}
    </div>
  );
};


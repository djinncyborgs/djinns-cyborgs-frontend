import * as Dialog from '@radix-ui/react-dialog';
import * as React from 'react';

import s from './EmailSentModal.module.scss';

export const EmailSentModal = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button>Email Sent</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <Dialog.Title className={s.title}>Email sent</Dialog.Title>
        <Dialog.Description className={s.description}>
          We have sent a link to confirm your email to epam@epam.com
        </Dialog.Description>
        <Dialog.Close asChild>
          <button className={s.closeButton} aria-label="Close">
            Ok
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

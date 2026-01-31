import {CongratulationsImage} from '@/shared/assets/images';

import s from './EmailSuccessConfirmation.module.scss';

export const EmailSuccessConfirmation = () => (
  <article className={s.content}>
    <h1 className={s.title}>Congratulations!</h1>
    <p className={s.text}>Your email has been confirmed</p>
    <button className={s.button}>Sign in</button>
    <CongratulationsImage />
  </article>
);

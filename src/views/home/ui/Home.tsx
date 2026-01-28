import Link from 'next/link';

import {
  BraveIcon,
  ChromeIcon,
  ExplorerIcon,
  FacebookIcon,
  FirefoxIcon,
  FlagRussiaIcon,
  FlagUKIcon,
  GitHubIcon,
  GoogleIcon,
  MicrosoftEdgeIcon,
  OperaIcon,
  PaidIcon,
  PayPalIcon,
  RecaptchaIcon,
  SafariIcon,
  StripeIcon,
  UcBrowserIcon,
  YandexIcon,
} from '@/shared/icons';

import s from './Home.module.scss';

const HomeView = () => {
  return (
    <div className={s.page}>
      <div style={{display: 'flex', gap: '20px'}}>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/settings'}>Settings</Link>
      </div>
      <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
        <FlagRussiaIcon />
        <FlagUKIcon />
        <FacebookIcon />
        <GitHubIcon />
        <GoogleIcon />
        <PaidIcon />
        <PayPalIcon />
        <RecaptchaIcon />
        <StripeIcon />
        <ChromeIcon />
        <OperaIcon />
        <FirefoxIcon />
        <ExplorerIcon />
        <SafariIcon />
        <BraveIcon />
        <MicrosoftEdgeIcon />
        <YandexIcon />
        <UcBrowserIcon />
      </div>
    </div>
  );
};

export default HomeView;

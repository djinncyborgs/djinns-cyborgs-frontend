import Link from 'next/link';

import {Typography} from '@/shared/components/Typography';

import s from './Home.module.scss';

const HomeView = () => {
  return (
    <div className={s.page}>
      <Typography variant="link12" as={Link} href="/profile">
        Profile
      </Typography>
      <Link href={'/settings'}>Settings</Link>
      <Typography variant={'h1'}>Typography TEST1</Typography>
    </div>
  );
};

export default HomeView;

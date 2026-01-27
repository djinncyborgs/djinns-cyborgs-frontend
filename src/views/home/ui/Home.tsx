import Link from 'next/link';

import s from './Home.module.scss';

const HomeView = () => {
  return (
    <div className={s.page}>
      <Link href={'/profile'}>Profile</Link>
      <Link href={'/settings'}>Settings</Link>
    </div>
  );
};

export default HomeView;

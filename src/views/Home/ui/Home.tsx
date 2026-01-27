import Link from 'next/link';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.page}>
      <Link href={'/profile'}>Profile</Link>
      <Link href={'/settings'}>Settings</Link>
    </div>
  );
};

export default HomePage;

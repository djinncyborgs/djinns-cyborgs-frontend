import Link from 'next/link';

import s from './Home.module.scss';

const HomeView = () => {
  return (
    <div className={s.page}>
      <div style={{display: 'flex', gap: '20px'}}>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/settings'}>Settings</Link>
      </div>
    </div>
  );
};

export default HomeView;

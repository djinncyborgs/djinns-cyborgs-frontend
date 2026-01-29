import Link from 'next/link';
import s from './Home.module.scss';

const HomeView = () => {
  // mock data
  const userId = '123';
  return (
    <div className={s.page}>
      <Link href={`/profile/${userId}`}>Profile</Link>
      <Link href={'/settings?part=info'}>Settings</Link>
    </div>
  );
};;

export default HomeView;

import Link from 'next/link';

import {CustomLink} from '@/components/CustomLink';

type Props = {
  id: string;
};

const UserProfilePage = ({id}: Props) => {
  return (
    <div>
      User Profile
      <hr />
      <div style={{display: 'flex', gap: '20px'}}>
        <span style={{color: 'green'}}>{id}</span>
        <Link href={'/'}>Main</Link>
        <CustomLink title={'Open Post 456'} param={'postId'} value={'456'} />
        <CustomLink title={'Open Post 18'} param={'postId'} value={'18'} />
        <CustomLink title={'Create Post'} param={'action'} value={'create'} />
      </div>
    </div>
  );
};

export default UserProfilePage;

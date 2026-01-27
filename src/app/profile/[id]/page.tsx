import Link from 'next/link';
import {redirect} from 'next/navigation';
import {CustomLink} from '@/components/CustomLink';

type Props = {
  params: Promise<{id: string}>;
  searchParams: Promise<Record<string, string>>;
};

export default async function UserProfile({params, searchParams}: Props) {
  const {id} = await params;
  const {postId, action} = await searchParams;

  if (postId && action) {
    redirect(`/profile/${id}?postId=${postId}`);
  }

  return (
    <div>
      User Profile
      <hr />
      <div style={{display: 'flex', gap: '20px'}}>
        <Link href={'/'}>Main</Link>
        <CustomLink title={'Open Post 456'} param={'postId'} value={'456'} />
        <CustomLink title={'Open Post 18'} param={'postId'} value={'18'} />
        <CustomLink title={'Create Post'} param={'action'} value={'create'} />
      </div>
    </div>
  );
}

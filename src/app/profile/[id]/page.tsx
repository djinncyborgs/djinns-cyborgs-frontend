import {Metadata} from 'next';
import {redirect} from 'next/navigation';

import {UserProfileView} from '@/views/userProfile';

export const metadata: Metadata = {
  title: 'User Profile Page',
  description: 'Profile Page',
};
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

  return <UserProfileView id={id} />;
}

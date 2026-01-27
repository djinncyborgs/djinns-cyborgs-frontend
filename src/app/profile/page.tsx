import {redirect} from 'next/navigation';

export default function ProfilePage() {
  // mock data
  const userId = 123;
  const isAuthenticated = true;

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (isAuthenticated) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    redirect(`/profile/${userId}`);
  } else {
    redirect(`/`);
  }

  return null;
}
